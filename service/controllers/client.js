import { t } from "#translations/index";

import { GeneralTemplate, buildRedirectCta } from "#utils/templates";

import { getMailTransporter } from "#utils/helperFunctions";

import { getCountryTimezoneByAlpha2Query } from "#queries/countries";

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
  time,
  country,
}) => {
  const from = `uSupport <${EMAIL_SENDER}>`;

  const timezoneResult = await getCountryTimezoneByAlpha2Query({
    alpha2: country?.toUpperCase(),
  }).catch(() => null);
  const timezone = timezoneResult?.rows?.[0]?.timezone ?? null;

  let formattedDatetimeWithTimezone = "";
  if (time && timezone) {
    const date = new Date(time * 1000);
    const formattedDatetime = new Intl.DateTimeFormat("en", {
      timeZone: timezone,
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(date);

    const city = timezone.split("/").pop().replace(/_/g, " ");
    let gmtOffset = "";
    try {
      gmtOffset =
        new Intl.DateTimeFormat("en", {
          timeZone: timezone,
          timeZoneName: "shortOffset",
        })
          .formatToParts(date)
          .find((p) => p.type === "timeZoneName")?.value ?? "";
    } catch {
      const parts = new Intl.DateTimeFormat("en", {
        timeZone: timezone,
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: false,
      })
        .formatToParts(date)
        .reduce((acc, p) => ({ ...acc, [p.type]: p.value }), {});
      const h = parseInt(parts.hour);
      const tzDate = new Date(
        Date.UTC(
          +parts.year,
          +parts.month - 1,
          +parts.day,
          h === 24 ? 0 : h,
          +parts.minute
        )
      );
      const totalMinutes = Math.round((tzDate - date) / 60000);
      const sign = totalMinutes >= 0 ? "+" : "-";
      const abs = Math.abs(totalMinutes);
      const oh = Math.floor(abs / 60),
        om = abs % 60;
      gmtOffset =
        om > 0
          ? `GMT${sign}${oh}:${String(om).padStart(2, "0")}`
          : `GMT${sign}${oh}`;
    }

    formattedDatetimeWithTimezone = `${formattedDatetime} (${city}, ${gmtOffset})`;
  }

  const subject = t("client_consultation_confirm_booking_subject", language);
  const title = t("client_consultation_confirm_booking_title", language);
  const platformLink = `${getPlatformUrl(countryLabel)}/client/${language}`;
  const text = buildRedirectCta({
    url: platformLink,
    language,
    before: t("client_consultation_confirm_booking_text", language, [
      formattedDatetimeWithTimezone,
    ]),
    buttonLabelKey: "email_cta_view_consultation",
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

export const sendConsultationConfirmRescheduleEmail = async ({
  language,
  recipientEmail,
  countryLabel,
}) => {
  const from = `uSupport <${EMAIL_SENDER}>`;

  const subject = t("client_consultation_confirm_reschedule_subject", language);
  const title = t("client_consultation_confirm_reschedule_title", language);
  const platformLink = `${getPlatformUrl(countryLabel)}/client/${language}`;
  const text = buildRedirectCta({
    url: platformLink,
    language,
    before: t("client_consultation_confirm_reschedule_text", language),
    buttonLabelKey: "email_cta_view_consultation",
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
  const text = buildRedirectCta({
    url: platformLink,
    language,
    before: t("client_consultation_confirm_cancellation_text", language),
    buttonLabelKey: "email_cta_schedule_consultation",
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
  const text = buildRedirectCta({
    url: platformLink,
    language,
    before: t("client_consultation_notify_cancellation_text", language),
    buttonLabelKey: "email_cta_schedule_consultation",
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
  const text = buildRedirectCta({
    url: platformLink,
    language,
    before: t("client_consultation_remind_start_text", language, [
      minToConsultation,
    ]),
    buttonLabelKey: "email_cta_join_consultation",
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
  const text = buildRedirectCta({
    url: platformLink,
    language,
    before: t(
      is24HoursBefore
        ? "client_consultation_start_24_text"
        : "client_consultation_start_48_text",
      language,
      [providerName]
    ),
    buttonLabelKey: "email_cta_join_consultation",
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

export const sendConsultationHasStartedReminderEmail = async ({
  language,
  recipientEmail,
  countryLabel,
}) => {
  const from = `uSupport <${EMAIL_SENDER}>`;

  const subject = t("consultation_started_remind_subject", language);
  const title = t("consultation_started_remind_title", language);
  const platformLink = `${getPlatformUrl(countryLabel)}/client/${language}`;
  const text = buildRedirectCta({
    url: platformLink,
    language,
    before: t("consultation_started_remind_text", language),
    buttonLabelKey: "email_cta_join_consultation",
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

export const sendConsultationNotifySuggestionEmail = async ({
  language,
  recipientEmail,
  countryLabel,
  bookingDate,
  providerName,
  isSuggestingNewTime,
}) => {
  const from = `uSupport <${EMAIL_SENDER}>`;

  const textKey = isSuggestingNewTime
    ? "client_consultation_notify_suggestion_text_new_time"
    : "client_consultation_notify_suggestion_text";

  const subject = t("client_consultation_notify_suggestion_subject", language);
  const title = t("client_consultation_notify_suggestion_title", language);
  const platformLink = `${getPlatformUrl(countryLabel)}/client/${language}`;
  const platformLinkWithQuery = `${platformLink}/consultations?suggestion_date=${encodeURIComponent(
    bookingDate
  )}`;
  const text = buildRedirectCta({
    url: platformLinkWithQuery,
    language,
    before: t(textKey, language, [providerName]),
    buttonLabelKey: "email_cta_view_suggestion",
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
  const text = buildRedirectCta({
    url: platformLink,
    language,
    before: t("client_consultation_confirm_suggestion_booking_text", language),
    buttonLabelKey: "email_cta_view_consultation",
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
  const text = buildRedirectCta({
    url: platformLink,
    language,
    before: t(
      "client_consultation_confirm_suggestion_cancellation_text",
      language
    ),
    buttonLabelKey: "email_cta_schedule_consultation",
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
  const text = buildRedirectCta({
    url: platformLink,
    language,
    before: t("client_email_already_used_text", language),
    after: t("client_email_already_used_text_after", language),
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
  countryLabel,
  summary,
}) => {
  const from = `uSupport <${EMAIL_SENDER}>`;

  const subject = t("client_mood_tracker_report_weekly_subject", language);
  const title = t("client_mood_tracker_report_weekly_title", language);
  const platformLink = `${getPlatformUrl(countryLabel)}/client/${language}`;

  let moodBreakdownHtml = "";
  if (summary?.moodBreakdown && summary.moodBreakdown.length > 0) {
    moodBreakdownHtml = "<ul style='margin: 10px 0;'>";
    summary.moodBreakdown.forEach(({ mood, count, percentage }) => {
      moodBreakdownHtml += `<li><strong>${mood}:</strong> ${count} times (${percentage}%)</li>`;
    });
    moodBreakdownHtml += "</ul>";
  }

  const text = buildRedirectCta({
    url: platformLink,
    language,
    before: t("client_mood_tracker_report_weekly_text", language, [
      summary?.dateRange || "N/A",
      summary?.totalMoodTracks || 0,
      summary?.mostSelectedMood || "N/A",
      summary?.mostSelectedMoodCount || 0,
      moodBreakdownHtml,
    ]),
    buttonLabelKey: "email_cta_log_mood",
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

export const sendMoodTrackerReminderEmail = async ({
  language,
  recipientEmail,
  countryLabel,
}) => {
  const from = `uSupport <${EMAIL_SENDER}>`;

  const subject = t("client_mood_tracker_reminder_subject", language);
  const title = t("client_mood_tracker_reminder_title", language);
  const platformLink = `${getPlatformUrl(countryLabel)}/client/${language}`;
  const text = buildRedirectCta({
    url: platformLink,
    language,
    before: t("client_mood_tracker_reminder_text", language),
    buttonLabelKey: "email_cta_log_mood",
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

export const sendCouponReminderEmail = async ({
  language,
  recipientEmail,
  countryLabel,
}) => {
  const from = `uSupport <${EMAIL_SENDER}>`;

  const subject = t("client_coupon_reminder_subject", language);
  const title = t("client_coupon_reminder_title", language);
  const platformLink = `${getPlatformUrl(
    countryLabel
  )}/client/${language}/select-provider`;
  const text = buildRedirectCta({
    url: platformLink,
    language,
    before: t("client_coupon_reminder_text", language),
    after: t("client_coupon_reminder_text_after", language),
    buttonLabelKey: "email_cta_book_session",
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
