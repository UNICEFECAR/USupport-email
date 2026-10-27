import { GeneralTemplate, buildRedirectCta } from "#utils/templates";
import { getMailTransporter } from "#utils/helperFunctions";
import {
  getCountryIdByAlpha2CodeQuery,
  getCountryTimezoneByAlpha2Query,
} from "#queries/countries";
import { getCountryAdminEmails } from "#queries/admins";
import { t } from "#translations/index";

const EMAIL_SENDER = process.env.EMAIL_SENDER;
const FRONTEND_URL = process.env.FRONTEND_URL;

const getPlatformUrl = (countryLabel) => {
  let PLATFORM_URL = `${FRONTEND_URL}`;
  if (!countryLabel) {
    return PLATFORM_URL;
  }

  if (!FRONTEND_URL.includes("staging")) {
    PLATFORM_URL = FRONTEND_URL.replace("usupport", `${countryLabel}.usupport`);
  } else {
    PLATFORM_URL = FRONTEND_URL.replace(
      "staging.usupport",
      `${countryLabel}.staging.usupport`
    );
  }

  return PLATFORM_URL;
};

const GLOBAL_COUNTRY_EMAIL_RECEIVER = process.env.GLOBAL_COUNTRY_EMAIL_RECEIVER;

export const sendAdminEmail = async ({
  country,
  subject,
  title,
  text,
  email, // Email for reply-to
}) => {
  const from = `uSupport <${EMAIL_SENDER}>`;
  let emails = [];

  if (country === "global") {
    emails = [GLOBAL_COUNTRY_EMAIL_RECEIVER, EMAIL_SENDER];
  } else {
    const countryId = await getCountryIdByAlpha2CodeQuery({ alpha2: country })
      .then((res) => {
        if (res.rowCount === 0) {
          // TODO: Handle the translation of this error
          throw new Error("Country not found");
        } else {
          return res.rows[0].country_id;
        }
      })
      .catch((err) => {
        throw err;
      });
    emails = await getCountryAdminEmails({ countryId })
      .then((res) => {
        if (res.rowCount === 0) {
          // TODO: How to handle the case where there are no admins(if its even possible)
          return [];
        } else {
          return res.rows.map((x) => x.email);
        }
      })
      .catch((err) => {
        throw err;
      });
  }

  let computedHTML = GeneralTemplate(title, text);

  const transporter = getMailTransporter();

  await transporter
    .sendMail({
      from: from,
      to: emails,
      replyTo: email || "",
      subject: subject,
      html: computedHTML,
    })
    .catch((err) => {
      console.log(err);
    });

  return { success: true };
};

export const sendRegistrationNotify = async ({
  language,
  recipientEmail,
  password,
  adminRole,
  countryLabel,
}) => {
  const from = `uSupport <${EMAIL_SENDER}>`;

  const subject = t("admin_registration_notify_subject", language);
  const title = t("admin_registration_notify_title", language);
  const platformLink = `${getPlatformUrl(
    countryLabel
  )}/${adminRole}-admin/${language}/login`;
  const text = buildRedirectCta({
    url: platformLink,
    language,
    before: t("admin_registration_notify_text", language, [password]),
    buttonLabelKey: "email_cta_log_in",
  });

  let computedHTML = GeneralTemplate(title, text);

  const transporter = getMailTransporter();

  await transporter
    .sendMail({
      from: from,
      to: recipientEmail,
      subject: subject,
      html: computedHTML,
    })
    .catch((err) => {
      console.log(err);
    });

  return { success: true };
};

export const sendConsultationProblemReportEmail = async ({
  country,
  reportId,
  reporterType,
  submittedAt,
  time,
  language = "en",
  countryLabel,
}) => {
  const countryData = (await getCountryIdByAlpha2CodeQuery({ alpha2: country }))
    .rows[0];
  if (!countryData) throw new Error("Country not found");
  const recipients = [
    ...new Set(
      (
        await getCountryAdminEmails({ countryId: countryData.country_id })
      ).rows.map((row) => row.email)
    ),
  ];
  if (!recipients.length)
    throw new Error(
      "No active country admins available for report notification"
    );
  const timezoneResult = await getCountryTimezoneByAlpha2Query({
    alpha2: country,
  });
  const timezone = timezoneResult.rows[0]?.timezone || "UTC";
  const requestedLanguage = language.split(/[-_]/)[0];
  language = [
    "en",
    "hy",
    "kk",
    "ru",
    "uk",
    "pl",
    "ro",
    "el",
    "ar",
    "tr",
  ].includes(requestedLanguage)
    ? requestedLanguage
    : "en";
  const url = `${getPlatformUrl(
    countryLabel
  )}/country-admin/${language}/consultation-problem-reports/${reportId}`;
  const format = (value) =>
    new Intl.DateTimeFormat(language, {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: timezone,
    }).format(new Date(value));
  const role = t(`consultation_problem_report_${reporterType}`, language);
  const from = `uSupport <${EMAIL_SENDER}>`;
  const subject = t("consultation_problem_report_subject", language, [role]);
  const title = t("consultation_problem_report_title", language);
  const text = buildRedirectCta({
    url,
    language,
    buttonLabelKey: "consultation_problem_report_view",
    before: `<p>${t(
      "consultation_problem_report_submitted",
      language
    )}: ${format(submittedAt)} (${timezone})</p>
    <p>${t("consultation_problem_report_consultation", language)}: ${format(
      time
    )} (${timezone})</p>
    <p>${t("consultation_problem_report_reporter", language)}: ${role}</p>
    `,
  });
  const computedHTML = GeneralTemplate(title, text, {
    language,
    footerReason: t("consultation_problem_report_reason", language),
    footerRights: t("consultation_problem_report_rights", language),
  });
  const transporter = getMailTransporter();
  await transporter.sendMail({
    from,
    to: recipients,
    subject,
    html: computedHTML,
  });
  return { success: true };
};
