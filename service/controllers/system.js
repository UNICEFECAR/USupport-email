import { t } from "#translations/index";

import { GeneralTemplate } from "#utils/templates";

import { getMailTransporter } from "#utils/helperFunctions";

const EMAIL_SENDER = process.env.EMAIL_SENDER;
const FRONTEND_URL = process.env.FRONTEND_URL;

export const sendForgotPasswordEmail = async ({
  recipientEmail,
  language,
  platform,
  forgotPasswordToken,
}) => {
  const from = `USupport <${EMAIL_SENDER}>`;

  const subject = t("system_forgot_password_subject", language);
  const title = t("system_forgot_password_title", language);
  const forgotPasswordLink = `${FRONTEND_URL}/${platform}/reset-password?rp=${forgotPasswordToken}`;
  const forgotPasswordLinkAnchor = `<a href=${forgotPasswordLink}>${forgotPasswordLink}</a>`;
  const text = t("system_forgot_password_text", language, [
    forgotPasswordLinkAnchor,
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

export const sendWelcomeEmail = async ({
  recipientEmail,
  language,
  platform,
}) => {
  const from = `USupport <${EMAIL_SENDER}>`;

  const subject = t("system_welcome_subject", language);
  const title = t("system_welcome_title", language);
  const loginLink = `${FRONTEND_URL}/${platform}`;
  const loginLinkAnchor = `<a href=${loginLink}>${loginLink}</a>`;
  const text = t("system_welcome_text", language, [loginLinkAnchor]);

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
