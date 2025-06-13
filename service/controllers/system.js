import { t } from "#translations/index";

import { GeneralTemplate } from "#utils/templates";

import { getMailTransporter } from "#utils/helperFunctions";

const EMAIL_SENDER = process.env.EMAIL_SENDER;
const FRONTEND_URL = process.env.FRONTEND_URL;

const getPlatformUrl = (countryLabel, platform) => {
  let PLATFORM_URL = `${FRONTEND_URL}/${platform}`;
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

export const sendForgotPasswordEmail = async ({
  recipientEmail,
  language,
  platform,
  forgotPasswordToken,
  countryLabel,
}) => {
  const from = `uSupport <${EMAIL_SENDER}>`;
  const PLATFORM_URL = getPlatformUrl(countryLabel, platform);

  const subject = t("system_forgot_password_subject", language);
  const title = t("system_forgot_password_title", language);
  const forgotPasswordLink = `${PLATFORM_URL}/${platform}/${language}/reset-password?rp=${forgotPasswordToken}`;
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
  countryLabel,
}) => {
  const from = `uSupport <${EMAIL_SENDER}>`;
  const PLATFORM_URL = getPlatformUrl(countryLabel, platform);

  const subject = t("system_welcome_subject", language);
  const title = t("system_welcome_title", language);
  const loginLink = `${PLATFORM_URL}/${platform}/${language}`;
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

export const sendLogin2FARequest = async ({
  language,
  recipientEmail,
  otp,
}) => {
  const from = `uSupport <${EMAIL_SENDER}>`;

  const subject = t("system_login_2fa_request_subject", language);
  const title = t("system_login_2fa_request_title", language);
  const text = t("system_login_2fa_request_text", language, [otp]);

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
