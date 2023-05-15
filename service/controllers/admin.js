import { GeneralTemplate } from "#utils/templates";

import { getMailTransporter } from "#utils/helperFunctions";

import { getCountryIdByAlpha2CodeQuery } from "#queries/countries";

import { getCountryAdminEmails } from "#queries/admins";
import { t } from "#translations/index";

const EMAIL_SENDER = process.env.EMAIL_SENDER;
const FRONTEND_URL = process.env.FRONTEND_URL;

export const sendAdminEmail = async ({ country, subject, title, text }) => {
  const from = `USupport <${EMAIL_SENDER}>`;

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

  const emails = await getCountryAdminEmails({ countryId })
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
}) => {
  const from = `USupport <${EMAIL_SENDER}>`;

  const subject = t("admin_registration_notify_subject", language);
  const title = t("admin_registration_notify_title", language);
  const platformLink = `${FRONTEND_URL}/${adminRole}-admin/login`;
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
