import { GeneralTemplate } from "#utils/templates";
import { getMailTransporter } from "#utils/helperFunctions";
import { getCountryIdByAlpha2CodeQuery } from "#queries/countries";
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

export const sendAdminEmail = async ({ country, subject, title, text }) => {
  const from = `uSupport <${EMAIL_SENDER}>`;
  let emails = [];

  if (country === "global") {
    emails = [GLOBAL_COUNTRY_EMAIL_RECEIVER];
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
  const platformLinkAnchor = `<a href=${platformLink}>${platformLink}</a>`;
  const text = t("admin_registration_notify_text", language, [
    platformLinkAnchor,
    password,
  ]);

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

export const sendAvailabilityReportEmail = async ({
  language,
  csvData,
  fileName,
  country,
  startDate,
  endDate,
  totalProviders,
  totalSlots,
  recipientEmail,
}) => {
  const from = `uSupport <${EMAIL_SENDER}>`;
  let emails = [];

  if (recipientEmail) {
    emails = [recipientEmail];
  } else {
    if (country === "global") {
      emails = [GLOBAL_COUNTRY_EMAIL_RECEIVER];
    } else {
      const countryId = await getCountryIdByAlpha2CodeQuery({ alpha2: country })
        .then((res) => {
          if (res.rowCount === 0) {
            throw new Error("Country not found");
          } else {
            return res.rows[0].country_id;
          }
        })
        .catch((err) => {
          console.error("Error getting country ID:", err);
          return null;
        });

      if (countryId) {
        emails = await getCountryAdminEmails({ countryId })
          .then((res) => {
            if (res.rowCount === 0) {
              console.log(
                "No country admin emails found, using global admin email"
              );
              return [GLOBAL_COUNTRY_EMAIL_RECEIVER];
            } else {
              //TODO: remove this
              return [
                "georgi.ganchev@7digit.io",
                "vasilen@7digit.io",
                "georgi@7digit.io",
              ];
              return res.rows.map((x) => x.email);
            }
          })
          .catch((err) => {
            console.error("Error getting admin emails:", err);
            return [GLOBAL_COUNTRY_EMAIL_RECEIVER];
          });
      } else {
        emails = [GLOBAL_COUNTRY_EMAIL_RECEIVER];
      }
    }
  }

  const generatedOn = new Date().toISOString();

  const subject = t("availability_report_subject", language, [
    country.toUpperCase(),
    startDate,
    endDate,
  ]);

  const title = t("availability_report_title", language);

  const text = t("availability_report_text", language, [
    country.toUpperCase(),
    startDate,
    endDate,
    totalProviders,
    totalSlots,
    generatedOn,
  ]);

  let computedHTML = GeneralTemplate(title, text);

  const transporter = getMailTransporter();

  await transporter
    .sendMail({
      from: from,
      to: emails,
      subject: subject,
      html: computedHTML,
      attachments: [
        {
          filename: fileName,
          content: csvData,
          contentType: "text/csv",
        },
      ],
    })
    .catch((err) => {
      console.log("Error sending availability report email:", err);
    });

  return { success: true };
};
