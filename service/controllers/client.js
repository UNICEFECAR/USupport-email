import { t } from "#translations/index";

import { GeneralTemplate } from "#utils/templates";

import { getMailTransporter } from "#utils/helperFunctions";

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

export const sendConsultationConfirmBookingEmail = async ({
  language,
  recipientEmail,
  countryLabel,
}) => {
  const from = `uSupport <${EMAIL_SENDER}>`;

  const subject = t("client_consultation_confirm_booking_subject", language);
  const title = t("client_consultation_confirm_booking_title", language);
  const platformLink = `${getPlatformUrl(countryLabel)}/client/${language}`;
  const platformLinkAnchor = `<a href=${platformLink}>${platformLink}</a>`;
  const text = t("client_consultation_confirm_booking_text", language, [
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

export const sendConsultationConfirmRescheduleEmail = async ({
  language,
  recipientEmail,
  countryLabel,
}) => {
  const from = `uSupport <${EMAIL_SENDER}>`;

  const subject = t("client_consultation_confirm_reschedule_subject", language);
  const title = t("client_consultation_confirm_reschedule_title", language);
  const platformLink = `${getPlatformUrl(countryLabel)}/client/${language}`;
  const platformLinkAnchor = `<a href=${platformLink}>${platformLink}</a>`;
  const text = t("client_consultation_confirm_reschedule_text", language, [
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
  countryLabel,
}) => {
  const from = `uSupport <${EMAIL_SENDER}>`;

  const subject = t(
    "client_consultation_confirm_cancellation_subject",
    language
  );
  const title = t("client_consultation_confirm_cancellation_title", language);
  const platformLink = `${getPlatformUrl(countryLabel)}/client/${language}`;
  const platformLinkAnchor = `<a href=${platformLink}>${platformLink}</a>`;
  const text = t("client_consultation_confirm_cancellation_text", language, [
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
  countryLabel,
}) => {
  const from = `uSupport <${EMAIL_SENDER}>`;

  const subject = t(
    "client_consultation_notify_cancellation_subject",
    language
  );
  const title = t("client_consultation_notify_cancellation_title", language);
  const platformLink = `${getPlatformUrl(countryLabel)}/client/${language}`;
  const platformLinkAnchor = `<a href=${platformLink}>${platformLink}</a>`;
  const text = t("client_consultation_notify_cancellation_text", language, [
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
  countryLabel,
}) => {
  const from = `uSupport <${EMAIL_SENDER}>`;

  const subject = t("client_consultation_remind_start_subject", language);
  const title = t("client_consultation_remind_start_title", language);
  const platformLink = `${getPlatformUrl(countryLabel)}/client/${language}`;
  const platformLinkAnchor = `<a href=${platformLink}>${platformLink}</a>`;
  const text = t("client_consultation_remind_start_text", language, [
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

export const sendConsultationRemindStart24or48HoursBeforeEmail = async ({
  language,
  recipientEmail,
  countryLabel,
  is24HoursBefore,
  providerName,
}) => {
  const from = `uSupport <${EMAIL_SENDER}>`;

  const subject = t(
    is24HoursBefore
      ? "client_consultation_start_24_subject"
      : "client_consultation_start_48_subject",
    language
  );
  const title = t(
    is24HoursBefore
      ? "client_consultation_start_24_title"
      : "client_consultation_start_48_title",
    language
  );
  const platformLink = `${getPlatformUrl(countryLabel)}/client/${language}`;
  const platformLinkAnchor = `<a href=${platformLink}>${platformLink}</a>`;
  const text = t(
    is24HoursBefore
      ? "client_consultation_start_24_text"
      : "client_consultation_start_48_text",
    language,
    [platformLinkAnchor, providerName]
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

export const sendConsultationHasStartedReminderEmail = async ({
  language,
  recipientEmail,
  countryLabel,
}) => {
  const from = `uSupport <${EMAIL_SENDER}>`;

  const subject = t("consultation_started_remind_subject", language);
  const title = t("consultation_started_remind_title", language);
  const platformLink = `${getPlatformUrl(countryLabel)}/client/${language}`;
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

export const sendConsultationNotifySuggestionEmail = async ({
  language,
  recipientEmail,
  countryLabel,
}) => {
  const from = `uSupport <${EMAIL_SENDER}>`;

  const subject = t("client_consultation_notify_suggestion_subject", language);
  const title = t("client_consultation_notify_suggestion_title", language);
  const platformLink = `${getPlatformUrl(countryLabel)}/client/${language}`;
  const platformLinkAnchor = `<a href=${platformLink}>${platformLink}</a>`;
  const text = t("client_consultation_notify_suggestion_text", language, [
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

export const sendConsultationConfirmSuggestionBookingEmail = async ({
  language,
  recipientEmail,
  countryLabel,
}) => {
  const from = `uSupport <${EMAIL_SENDER}>`;

  const subject = t(
    "client_consultation_confirm_suggestion_booking_subject",
    language
  );
  const title = t(
    "client_consultation_confirm_suggestion_booking_title",
    language
  );
  const platformLink = `${getPlatformUrl(countryLabel)}/client/${language}`;
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
      to: recipientEmail,
      subject: subject,
      html: computedHTML,
    })
    .catch((err) => {
      console.log(err);
    });

  return { success: true };
};

export const sendConsultationConfirmSuggestionCancellationEmail = async ({
  language,
  recipientEmail,
  countryLabel,
}) => {
  const from = `uSupport <${EMAIL_SENDER}>`;

  const subject = t(
    "client_consultation_confirm_suggestion_cancellation_subject",
    language
  );
  const title = t(
    "client_consultation_confirm_suggestion_cancellation_title",
    language
  );
  const platformLink = `${getPlatformUrl(countryLabel)}/client/${language}`;
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
      to: recipientEmail,
      subject: subject,
      html: computedHTML,
    })
    .catch((err) => {
      console.log(err);
    });

  return { success: true };
};

export const sendRegistrationOtpToUsersEmail = async ({
  language,
  recipientEmail,
  otp,
}) => {
  const from = `uSupport <${EMAIL_SENDER}>`;

  const subject = t("client_registration_otp_subject", language);
  const title = t("client_registration_otp_title", language);
  const text = t("client_registration_otp_text", language, [otp]);

  let computedHTML = GeneralTemplate(title, text);

  const transporter = getMailTransporter();

  await transporter
    .sendMail({
      from: from,
      to: recipientEmail,
      subject: subject,
      html: computedHTML,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  return { success: true };
};

export const sendEmailAlreadyUsedEmail = async ({
  language,
  recipientEmail,
  countryLabel,
}) => {
  const from = `uSupport <${EMAIL_SENDER}>`;

  const platformLink = `${getPlatformUrl(
    countryLabel
  )}/client/${language}/login`;

  const subject = t("client_registration_otp_subject", language);
  const title = t("client_registration_otp_title", language);
  const text = t("client_email_already_used_text", language, [
    platformLink,
    platformLink,
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
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  return { success: true };
};

export const sendQuestionAnsweredEmail = async ({
  language,
  recipientEmail,
  providerName,
}) => {
  const from = `uSupport <${EMAIL_SENDER}>`;

  const subject = t("question_answered", language);
  const title = t("question_answered", language);
  const text = t("question_answered_text", language, [providerName]);

  let computedHTML = GeneralTemplate(title, text);

  const transporter = getMailTransporter();

  await transporter
    .sendMail({
      from: from,
      to: recipientEmail,
      subject: subject,
      html: computedHTML,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  return { success: true };
};

export const sendMoodTrackerReportWeeklyEmail = async ({
  language,
  recipientEmail,
  csvData,
  countryLabel,
}) => {
  const from = `uSupport <${EMAIL_SENDER}>`;

  const subject = t("client_mood_tracker_report_weekly_subject", language);
  const title = t("client_mood_tracker_report_weekly_title", language);
  const platformLink = `${getPlatformUrl(countryLabel)}/client/${language}`;
  const platformLinkAnchor = `<a href=${platformLink}>${platformLink}</a>`;
  const text = t("client_mood_tracker_report_weekly_text", language, [
    platformLinkAnchor,
  ]);

  const csvFileName =
    t("client_mood_tracker_report_weekly_subject") +
    "-" +
    new Date().toISOString().split("T")[0];

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
          content: csvData,
        },
      ],
    })
    .catch((err) => {
      console.log(err);
    });

  return { success: true };
};
