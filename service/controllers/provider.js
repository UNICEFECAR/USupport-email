import { t } from "#translations/index";

import { GeneralTemplate } from "#utils/templates";

import {
  getMailTransporter,
  getStartAndEndOfWeek,
} from "#utils/helperFunctions";

const EMAIL_SENDER = process.env.EMAIL_SENDER;
const FRONTEND_URL = process.env.FRONTEND_URL;

export const sendConsultationNotifyBookingEmail = async ({
  language,
  recipientEmail,
}) => {
  const from = `uSupport <${EMAIL_SENDER}>`;

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
  const from = `uSupport <${EMAIL_SENDER}>`;

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
  const from = `uSupport <${EMAIL_SENDER}>`;

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
  const from = `uSupport <${EMAIL_SENDER}>`;

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
  const from = `uSupport <${EMAIL_SENDER}>`;

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

export const sendConsultationHasStartedReminderEmail = async ({
  language,
  recipientEmail,
}) => {
  const from = `uSupport <${EMAIL_SENDER}>`;

  const subject = t("consultation_started_remind_subject", language);
  const title = t("consultation_started_remind_title", language);
  const platformLink = `${FRONTEND_URL}/provider`;
  const platformLinkAnchor = `<a href=${platformLink}>${platformLink}</a>`;
  const text = t("consultation_started_remind_text", language, [
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

export const sendConsultationConfirmSuggestionEmail = async ({
  language,
  recipientEmail,
}) => {
  const from = `uSupport <${EMAIL_SENDER}>`;

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
  const from = `uSupport <${EMAIL_SENDER}>`;

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
  const from = `uSupport <${EMAIL_SENDER}>`;

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
  const from = `uSupport <${EMAIL_SENDER}>`;

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

export const sendReportWeeklyEmail = async ({
  language,
  recipientEmail,
  csvData,
}) => {
  const from = `uSupport <${EMAIL_SENDER}>`;

  const subject = t("provider_report_weekly_subject", language);
  const title = t("provider_report_weekly_title", language);
  const platformLink = `${FRONTEND_URL}/provider`;
  const platformLinkAnchor = `<a href=${platformLink}>${platformLink}</a>`;
  const text = t("provider_report_weekly_text", language, [platformLinkAnchor]);

  const csvFileName =
    t("provider_report_weekly_subject") +
    "-" +
    getStartAndEndOfWeek(new Date());

  let computedHTML = GeneralTemplate(title, text);

  const transporter = getMailTransporter();

  await transporter
    .sendMail({
      from: from,
      to: recipientEmail,
      subject: subject,
      html: computedHTML,
      attachments: [
        {
          filename: `${csvFileName}.csv`,
          content: csvData, // attaching csv in the content
        },
      ],
    })
    .catch((err) => {
      console.log(err);
    });

  return { success: true };
};

export const sendReportMonthlyEmail = async ({
  language,
  recipientEmail,
  csvData,
}) => {
  const from = `uSupport <${EMAIL_SENDER}>`;

  const subject = t("provider_report_monthly_subject", language);
  const title = t("provider_report_monthly_title", language);
  const platformLink = `${FRONTEND_URL}/provider`;
  const platformLinkAnchor = `<a href=${platformLink}>${platformLink}</a>`;
  const text = t("provider_report_monthly_text", language, [
    platformLinkAnchor,
  ]);

  const csvFileName =
    t("provider_report_monthly_subject") +
    "-" +
    t(`month_${new Date().getMonth() + 1}`) +
    `-${new Date().getFullYear()}`;

  let computedHTML = GeneralTemplate(title, text);

  const transporter = getMailTransporter();

  await transporter
    .sendMail({
      from: from,
      to: recipientEmail,
      subject: subject,
      html: computedHTML,
      attachments: [
        {
          filename: `${csvFileName}.csv`,
          content: csvData, // attaching csv in the content
        },
      ],
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
}) => {
  const from = `uSupport <${EMAIL_SENDER}>`;

  const subject = t("provider_registration_notify_subject", language);
  const title = t("provider_registration_notify_title", language);
  const platformLink = `${FRONTEND_URL}/provider/login`;
  const platformLinkAnchor = `<a href=${platformLink}>${platformLink}</a>`;
  const text = t("provider_registration_notify_text", language, [
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
