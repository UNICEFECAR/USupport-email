import { t } from "#translations/index";

import { GeneralTemplate } from "#utils/templates";

import { getMailTransporter } from "#utils/helperFunctions";

const EMAIL_SENDER = process.env.EMAIL_SENDER;
const FRONTEND_URL = process.env.FRONTEND_URL;

export const sendConsultationNotifyBookingEmail = async ({
  language,
  recipientEmail,
}) => {
  const from = `USupport <${EMAIL_SENDER}>`;

  const subject = t("provider_consultation_notify_booking_subject", language);
  const title = t("provider_consultation_notify_booking_title", language);
  const platformLink = `${FRONTEND_URL}/provider`;
  const platformLinkAnchor = `<a href=${platformLink}>${platformLink}</a>`;
  const text = t("provider_consultation_notify_booking_text", language, [
    platformLinkAnchor,
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

export const sendConsultationNotifyRescheduleEmail = async ({
  language,
  recipientEmail,
}) => {
  const from = `USupport <${EMAIL_SENDER}>`;

  const subject = t(
    "provider_consultation_notify_reschedule_subject",
    language
  );
  const title = t("provider_consultation_notify_reschedule_title", language);
  const platformLink = `${FRONTEND_URL}/provider`;
  const platformLinkAnchor = `<a href=${platformLink}>${platformLink}</a>`;
  const text = t("provider_consultation_notify_reschedule_text", language, [
    platformLinkAnchor,
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

export const sendConsultationNotifyCancellationEmail = async ({
  language,
  recipientEmail,
}) => {
  const from = `USupport <${EMAIL_SENDER}>`;

  const subject = t(
    "provider_consultation_notify_cancellation_subject",
    language
  );
  const title = t("provider_consultation_notify_cancellation_title", language);
  const platformLink = `${FRONTEND_URL}/provider`;
  const platformLinkAnchor = `<a href=${platformLink}>${platformLink}</a>`;
  const text = t("provider_consultation_notify_cancellation_text", language, [
    platformLinkAnchor,
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

export const sendConsultationConfirmCancellationEmail = async ({
  language,
  recipientEmail,
}) => {
  const from = `USupport <${EMAIL_SENDER}>`;

  const subject = t(
    "provider_consultation_confirm_cancellation_subject",
    language
  );
  const title = t("provider_consultation_confirm_cancellation_title", language);
  const platformLink = `${FRONTEND_URL}/provider`;
  const platformLinkAnchor = `<a href=${platformLink}>${platformLink}</a>`;
  const text = t("provider_consultation_confirm_cancellation_text", language, [
    platformLinkAnchor,
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

export const sendConsultationRemindStartEmail = async ({
  language,
  recipientEmail,
  minToConsultation,
}) => {
  const from = `USupport <${EMAIL_SENDER}>`;

  const subject = t("provider_consultation_remind_start_subject", language);
  const title = t("provider_consultation_remind_start_title", language);
  const platformLink = `${FRONTEND_URL}/provider`;
  const platformLinkAnchor = `<a href=${platformLink}>${platformLink}</a>`;
  const text = t("provider_consultation_remind_start_text", language, [
    platformLinkAnchor,
    minToConsultation,
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

export const sendConsultationConfirmSuggestionEmail = async ({
  language,
  recipientEmail,
}) => {
  const from = `USupport <${EMAIL_SENDER}>`;

  const subject = t(
    "provider_consultation_confirm_suggestion_subject",
    language
  );
  const title = t("provider_consultation_confirm_suggestion_title", language);
  const platformLink = `${FRONTEND_URL}/provider`;
  const platformLinkAnchor = `<a href=${platformLink}>${platformLink}</a>`;
  const text = t("provider_consultation_confirm_suggestion_text", language, [
    platformLinkAnchor,
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

export const sendConsultationNotifySuggestionBookingEmail = async ({
  language,
  recipientEmail,
}) => {
  const from = `USupport <${EMAIL_SENDER}>`;

  const subject = t(
    "provider_consultation_notify_suggestion_booking_subject",
    language
  );
  const title = t(
    "provider_consultation_notify_suggestion_booking_title",
    language
  );
  const platformLink = `${FRONTEND_URL}/provider`;
  const platformLinkAnchor = `<a href=${platformLink}>${platformLink}</a>`;
  const text = t(
    "provider_consultation_notify_suggestion_booking_text",
    language,
    [platformLinkAnchor]
  );

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

export const sendConsultationNotifySuggestionCancellationEmail = async ({
  language,
  recipientEmail,
}) => {
  const from = `USupport <${EMAIL_SENDER}>`;

  const subject = t(
    "provider_consultation_notify_suggestion_cancellation_subject",
    language
  );
  const title = t(
    "provider_consultation_notify_suggestion_cancellation_title",
    language
  );
  const platformLink = `${FRONTEND_URL}/provider`;
  const platformLinkAnchor = `<a href=${platformLink}>${platformLink}</a>`;
  const text = t(
    "provider_consultation_notify_suggestion_cancellation_text",
    language,
    [platformLinkAnchor]
  );

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

export const sendAvailabilityRemindAddMoreSlotsEmail = async ({
  language,
  recipientEmail,
}) => {
  const from = `USupport <${EMAIL_SENDER}>`;

  const subject = t(
    "provider_availability_remind_add_more_slots_subject",
    language
  );
  const title = t(
    "provider_availability_remind_add_more_slots_title",
    language
  );
  const platformLink = `${FRONTEND_URL}/provider`;
  const platformLinkAnchor = `<a href=${platformLink}>${platformLink}</a>`;
  const text = t("provider_availability_remind_add_more_slots_text", language, [
    platformLinkAnchor,
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

export const sendReportWeeklyEmail = async ({ language, recipientEmail }) => {
  const from = `USupport <${EMAIL_SENDER}>`;

  const subject = t("provider_report_weekly_subject", language);
  const title = t("provider_report_weekly_title", language);
  const platformLink = `${FRONTEND_URL}/provider`;
  const platformLinkAnchor = `<a href=${platformLink}>${platformLink}</a>`;
  const text = t("provider_report_weekly_text", language, [platformLinkAnchor]);

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

export const sendReportMonthlyEmail = async ({ language, recipientEmail }) => {
  const from = `USupport <${EMAIL_SENDER}>`;

  const subject = t("provider_report_monthly_subject", language);
  const title = t("provider_report_monthly_title", language);
  const platformLink = `${FRONTEND_URL}/provider`;
  const platformLinkAnchor = `<a href=${platformLink}>${platformLink}</a>`;
  const text = t("provider_report_monthly_text", language, [
    platformLinkAnchor,
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
