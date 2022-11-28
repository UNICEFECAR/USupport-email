import { t } from "#translations/index";

import { GeneralTemplate } from "#utils/templates";

import { getMailTransporter } from "#utils/helperFunctions";

const EMAIL_SENDER = process.env.EMAIL_SENDER;
const FRONTEND_URL = process.env.FRONTEND_URL;

export const sendConsultationConfirmBookingEmail = async ({
  language,
  clientEmail,
}) => {
  const from = `USupport <${EMAIL_SENDER}>`;

  const subject = t("client_consultation_confirm_booking_subject", language);
  const title = t("client_consultation_confirm_booking_title", language);
  const platformLink = `${FRONTEND_URL}/client`;
  const platformLinkAnchor = `<a href=${platformLink}>${platformLink}</a>`;
  const text = t("client_consultation_confirm_booking_text", language, [
    platformLinkAnchor,
  ]);

  let computedHTML = GeneralTemplate(title, text);

  const transporter = getMailTransporter();

  await transporter
    .sendMail({
      from: from,
      to: clientEmail,
      subject: subject,
      html: computedHTML,
    })
    .catch((err) => {
      throw err;
    });

  return { success: true };
};

export const sendConsultationConfirmRescheduleEmail = async ({
  language,
  clientEmail,
}) => {
  const from = `USupport <${EMAIL_SENDER}>`;

  const subject = t("client_consultation_confirm_reschedule_subject", language);
  const title = t("client_consultation_confirm_reschedule_title", language);
  const platformLink = `${FRONTEND_URL}/client`;
  const platformLinkAnchor = `<a href=${platformLink}>${platformLink}</a>`;
  const text = t("client_consultation_confirm_reschedule_text", language, [
    platformLinkAnchor,
  ]);

  let computedHTML = GeneralTemplate(title, text);

  const transporter = getMailTransporter();

  await transporter
    .sendMail({
      from: from,
      to: clientEmail,
      subject: subject,
      html: computedHTML,
    })
    .catch((err) => {
      throw err;
    });

  return { success: true };
};

export const sendConsultationConfirmCancellationEmail = async ({
  language,
  clientEmail,
}) => {
  const from = `USupport <${EMAIL_SENDER}>`;

  const subject = t(
    "client_consultation_confirm_cancellation_subject",
    language
  );
  const title = t("client_consultation_confirm_cancellation_title", language);
  const platformLink = `${FRONTEND_URL}/client`;
  const platformLinkAnchor = `<a href=${platformLink}>${platformLink}</a>`;
  const text = t("client_consultation_confirm_cancellation_text", language, [
    platformLinkAnchor,
  ]);

  let computedHTML = GeneralTemplate(title, text);

  const transporter = getMailTransporter();

  await transporter
    .sendMail({
      from: from,
      to: clientEmail,
      subject: subject,
      html: computedHTML,
    })
    .catch((err) => {
      throw err;
    });

  return { success: true };
};

export const sendConsultationNotifyCancellationEmail = async ({
  language,
  clientEmail,
}) => {
  const from = `USupport <${EMAIL_SENDER}>`;

  const subject = t(
    "client_consultation_notify_cancellation_subject",
    language
  );
  const title = t("client_consultation_notify_cancellation_title", language);
  const platformLink = `${FRONTEND_URL}/client`;
  const platformLinkAnchor = `<a href=${platformLink}>${platformLink}</a>`;
  const text = t("client_consultation_notify_cancellation_text", language, [
    platformLinkAnchor,
  ]);

  let computedHTML = GeneralTemplate(title, text);

  const transporter = getMailTransporter();

  await transporter
    .sendMail({
      from: from,
      to: clientEmail,
      subject: subject,
      html: computedHTML,
    })
    .catch((err) => {
      throw err;
    });

  return { success: true };
};

export const sendConsultationRemindStartEmail = async ({
  language,
  clientEmail,
}) => {
  const from = `USupport <${EMAIL_SENDER}>`;

  const subject = t("client_consultation_remind_start_subject", language);
  const title = t("client_consultation_remind_start_title", language);
  const platformLink = `${FRONTEND_URL}/client`;
  const platformLinkAnchor = `<a href=${platformLink}>${platformLink}</a>`;
  const text = t("client_consultation_remind_start_text", language, [
    platformLinkAnchor,
  ]);

  let computedHTML = GeneralTemplate(title, text);

  const transporter = getMailTransporter();

  await transporter
    .sendMail({
      from: from,
      to: clientEmail,
      subject: subject,
      html: computedHTML,
    })
    .catch((err) => {
      throw err;
    });

  return { success: true };
};

export const sendConsultationNotifySuggestionEmail = async ({
  language,
  clientEmail,
}) => {
  const from = `USupport <${EMAIL_SENDER}>`;

  const subject = t("client_consultation_notify_suggestion_subject", language);
  const title = t("client_consultation_notify_suggestion_title", language);
  const platformLink = `${FRONTEND_URL}/client`;
  const platformLinkAnchor = `<a href=${platformLink}>${platformLink}</a>`;
  const text = t("client_consultation_notify_suggestion_text", language, [
    platformLinkAnchor,
  ]);

  let computedHTML = GeneralTemplate(title, text);

  const transporter = getMailTransporter();

  await transporter
    .sendMail({
      from: from,
      to: clientEmail,
      subject: subject,
      html: computedHTML,
    })
    .catch((err) => {
      throw err;
    });

  return { success: true };
};

export const sendConsultationConfirmSuggestionBookingEmail = async ({
  language,
  clientEmail,
}) => {
  const from = `USupport <${EMAIL_SENDER}>`;

  const subject = t(
    "client_consultation_confirm_suggestion_booking_subject",
    language
  );
  const title = t(
    "client_consultation_confirm_suggestion_booking_title",
    language
  );
  const platformLink = `${FRONTEND_URL}/client`;
  const platformLinkAnchor = `<a href=${platformLink}>${platformLink}</a>`;
  const text = t(
    "client_consultation_confirm_suggestion_booking_text",
    language,
    [platformLinkAnchor]
  );

  let computedHTML = GeneralTemplate(title, text);

  const transporter = getMailTransporter();

  await transporter
    .sendMail({
      from: from,
      to: clientEmail,
      subject: subject,
      html: computedHTML,
    })
    .catch((err) => {
      throw err;
    });

  return { success: true };
};

export const sendConsultationConfirmSuggestionCancellationEmail = async ({
  language,
  clientEmail,
}) => {
  const from = `USupport <${EMAIL_SENDER}>`;

  const subject = t(
    "client_consultation_confirm_suggestion_cancellation_subject",
    language
  );
  const title = t(
    "client_consultation_confirm_suggestion_cancellation_title",
    language
  );
  const platformLink = `${FRONTEND_URL}/client`;
  const platformLinkAnchor = `<a href=${platformLink}>${platformLink}</a>`;
  const text = t(
    "client_consultation_confirm_suggestion_cancellation_text",
    language,
    [platformLinkAnchor]
  );

  let computedHTML = GeneralTemplate(title, text);

  const transporter = getMailTransporter();

  await transporter
    .sendMail({
      from: from,
      to: clientEmail,
      subject: subject,
      html: computedHTML,
    })
    .catch((err) => {
      throw err;
    });

  return { success: true };
};
