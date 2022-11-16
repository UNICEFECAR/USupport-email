import { t } from "#translations/index";

import { GeneralTemplate } from "#utils/templates";

import { getMailTransporter } from "#utils/helperFunctions";

const EMAIL_SENDER = process.env.EMAIL_SENDER;
const RECIEVERS = process.env.RECIEVERS;
const FRONTEND_URL = process.env.FRONTEND_URL;

export const sendForgotPasswordEmail = async ({
  language,
  platform,
  forgotPasswordToken,
}) => {
  const from = `USupport <${EMAIL_SENDER}>`;

  const subject = t("email_forgot_password_subject", language);
  const title = t("email_forgot_password_title", language);
  const forgotPasswordLink = `${FRONTEND_URL}/${platform}/reset-password?rp=${forgotPasswordToken}`;
  const forgotPasswordLinkAnchor = `<a href=${forgotPasswordLink}>${forgotPasswordLink}</a>`;
  const text = t("email_forgot_password_text", language, [
    forgotPasswordLinkAnchor,
  ]);

  let computedHTML = GeneralTemplate(title, text);

  const transporter = getMailTransporter();

  await transporter
    .sendMail({
      from: from,
      to: RECIEVERS,
      subject: subject,
      html: computedHTML,
    })
    .catch((err) => {
      throw err;
    });

  return { success: true };
};

export const sendWelcomeEmail = async ({ language, platform }) => {
  const from = `USupport <${EMAIL_SENDER}>`;

  const subject = t("email_welcome_subject", language);
  const title = t("email_welcome_title", language);
  const loginLink = `${FRONTEND_URL}/${platform}`;
  const loginLinkAnchor = `<a href=${loginLink}>${loginLink}</a>`;
  const text = t("email_welcome_text", language, [loginLinkAnchor]);

  let computedHTML = GeneralTemplate(title, text);

  const transporter = getMailTransporter();

  await transporter
    .sendMail({
      from: from,
      to: RECIEVERS,
      subject: subject,
      html: computedHTML,
    })
    .catch((err) => {
      throw err;
    });

  return { success: true };
};
