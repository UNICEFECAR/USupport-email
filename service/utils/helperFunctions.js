import nodemailer from "nodemailer";

import {
  sendForgotPasswordEmail,
  sendWelcomeEmail,
  sendLogin2FARequest,
} from "#controllers/system";

import {
  sendConsultationConfirmBookingEmail as sendConsultationConfirmBookingEmailClient,
  sendConsultationConfirmRescheduleEmail as sendConsultationConfirmRescheduleEmailClient,
  sendConsultationConfirmCancellationEmail as sendConsultationConfirmCancellationEmailClient,
  sendConsultationNotifyCancellationEmail as sendConsultationNotifyCancellationEmailClient,
  sendConsultationRemindStartEmail as sendConsultationRemindStartEmailClient,
  sendConsultationNotifySuggestionEmail as sendConsultationNotifySuggestionEmailClient,
  sendConsultationConfirmSuggestionBookingEmail as sendConsultationConfirmSuggestionBookingEmailClient,
  sendConsultationConfirmSuggestionCancellationEmail as sendConsultationConfirmSuggestionCancellationEmailClient,
  sendConsultationHasStartedReminderEmail as sendConsultationHasStartedReminderEmailClient,
} from "#controllers/client";

import {
  sendConsultationNotifyBookingEmail as sendConsultationNotifyBookingEmailProvider,
  sendConsultationNotifyRescheduleEmail as sendConsultationNotifyRescheduleEmailProvider,
  sendConsultationNotifyCancellationEmail as sendConsultationNotifyCancellationEmailProvider,
  sendConsultationConfirmCancellationEmail as sendConsultationConfirmCancellationEmailProvider,
  sendConsultationRemindStartEmail as sendConsultationRemindStartEmailProvider,
  sendConsultationConfirmSuggestionEmail as sendConsultationConfirmSuggestionEmailProvider,
  sendConsultationNotifySuggestionBookingEmail as sendConsultationNotifySuggestionBookingEmailProvider,
  sendConsultationNotifySuggestionCancellationEmail as sendConsultationNotifySuggestionCancellationEmailProvider,
  sendAvailabilityRemindAddMoreSlotsEmail as sendAvailabilityRemindAddMoreSlotsEmailProvider,
  sendReportWeeklyEmail as sendReportWeeklyEmailProvider,
  sendReportMonthlyEmail as sendReportMonthlyEmailProvider,
  sendRegistrationNotify as sendRegistrationNotifyProvider,
  sendConsultationHasStartedReminderEmail as sendConsultationHasStartedReminderEmailProvider,
} from "#controllers/provider";

import { sendRegistrationNotify as sendRegistrationNotifyAdmin } from "#controllers/admin";

import { checkIfUserAllowedEmailNotifications } from "#queries/user";

const EMAIL_SENDER = process.env.EMAIL_SENDER;
const EMAIL_SENDER_PASSWORD = process.env.EMAIL_SENDER_PASSWORD;
const EMAIL_HOST = process.env.EMAIL_HOST;
const EMAIL_PORT = process.env.EMAIL_PORT;

export function getMailTransporter() {
  return nodemailer.createTransport({
    host: EMAIL_HOST,
    port: EMAIL_PORT,
    secure: true,
    auth: {
      user: EMAIL_SENDER,
      pass: EMAIL_SENDER_PASSWORD,
    },
  });
}

export const handleEmailConsumerMessage = async ({ message }) => {
  const messageJSON = JSON.parse(message.value.toString());

  const {
    emailType,
    data,
    recipientEmail,
    language,
    recipientUserType,
    country,
  } = messageJSON;
  const payload = {
    language,
    recipientEmail,
    ...data,
  };

  // If the email type is in the alwaysSendEmails array
  // then we dont perform the check for allowed email notifications
  const alwaysSendEmails = [
    "signupWelcome",
    "forgotPassword",
    "provider-registration",
    "login-2fa-request",
    "admin-registration",
  ];
  console.log(messageJSON);
  let hasUserAllowedEmailNotifications = true;
  if (!alwaysSendEmails.includes(emailType)) {
    hasUserAllowedEmailNotifications =
      await checkIfUserAllowedEmailNotifications({
        poolCountry: country,
        userType: recipientUserType,
        email: recipientEmail,
      })
        .then((res) => {
          if (res.rowCount === 0) {
            return false;
          } else {
            return res.rows[0].enabled;
          }
        })
        .catch((err) => {
          throw err;
        });
  }

  if (!hasUserAllowedEmailNotifications) {
    return;
  }

  switch (emailType) {
    case "signupWelcome": {
      sendWelcomeEmail(payload);
      break;
    }
    case "forgotPassword": {
      sendForgotPasswordEmail(payload);
      break;
    }
    case "client-consultationConfirmBooking": {
      sendConsultationConfirmBookingEmailClient(payload);
      break;
    }
    case "client-consultationConfirmReschedule": {
      sendConsultationConfirmRescheduleEmailClient(payload);
      break;
    }
    case "client-consultationConfirmCancellation": {
      sendConsultationConfirmCancellationEmailClient(payload);
      break;
    }
    case "client-consultationNotifyCancellation": {
      sendConsultationNotifyCancellationEmailClient(payload);
      break;
    }
    case "client-consultationRemindStart": {
      sendConsultationRemindStartEmailClient(payload);
      break;
    }
    case "client-consultationStart": {
      sendConsultationHasStartedReminderEmailClient(payload);
      break;
    }
    case "client-consultationNotifySuggestion": {
      sendConsultationNotifySuggestionEmailClient(payload);
      break;
    }
    case "client-consultationConfirmSuggestionBooking": {
      sendConsultationConfirmSuggestionBookingEmailClient(payload);
      break;
    }
    case "client-consultationConfirmSuggestionCancellation": {
      sendConsultationConfirmSuggestionCancellationEmailClient(payload);
      break;
    }
    case "provider-consultationNotifyBooking": {
      sendConsultationNotifyBookingEmailProvider(payload);
      break;
    }
    case "provider-consultationNotifyReschedule": {
      sendConsultationNotifyRescheduleEmailProvider(payload);
      break;
    }
    case "provider-consultationNotifyCancellation": {
      sendConsultationNotifyCancellationEmailProvider(payload);
      break;
    }
    case "provider-consultationConfirmCancellation": {
      sendConsultationConfirmCancellationEmailProvider(payload);
      break;
    }
    case "provider-consultationRemindStart": {
      sendConsultationRemindStartEmailProvider(payload);
      break;
    }
    case "provider-consultationStart": {
      sendConsultationHasStartedReminderEmailProvider(payload);
      break;
    }
    case "provider-consultationConfirmSuggestion": {
      sendConsultationConfirmSuggestionEmailProvider(payload);
      break;
    }
    case "provider-consultationNotifySuggestionBooking": {
      sendConsultationNotifySuggestionBookingEmailProvider(payload);
      break;
    }
    case "provider-consultationNotifySuggestionCancellation": {
      sendConsultationNotifySuggestionCancellationEmailProvider(payload);
      break;
    }
    case "provider-availabilityRemindAddMoreSlots": {
      sendAvailabilityRemindAddMoreSlotsEmailProvider(payload);
      break;
    }
    case "provider-reportWeekly": {
      sendReportWeeklyEmailProvider(payload);
      break;
    }
    case "provider-reportMonthly": {
      sendReportMonthlyEmailProvider(payload);
      break;
    }
    case "provider-registration": {
      sendRegistrationNotifyProvider(payload);
      break;
    }
    case "login-2fa-request": {
      sendLogin2FARequest(payload);
      break;
    }
    case "admin-registration": {
      sendRegistrationNotifyAdmin(payload);
      break;
    }
    default:
      console.log("EMAIL TYPE NOT RECOGNIZED"); // Maybe you can throw an error, or just keep it as a log
  }
};

export function getDateView(date) {
  const newDate = new Date(date);
  const day = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const fullYear = newDate.getFullYear();
  const year = fullYear.toString().slice(-2);

  return `${day < 10 ? `0${day}` : day}.${
    month < 10 ? `0${month}` : month
  }.${year}`;
}

/**
 * Get the starting and ending day of the week
 *
 * @param {Date} day
 * @returns {{ start, end }} the start and end day of the week in format "DD.MM - DD.MM"
 */
export function getStartAndEndOfWeek(day) {
  const weekMap = [6, 0, 1, 2, 3, 4, 5];
  const now = new Date(day);
  now.setHours(0, 0, 0, 0);
  const firstDayOfWeek = new Date(now);
  firstDayOfWeek.setDate(
    firstDayOfWeek.getDate() - weekMap[firstDayOfWeek.getDay()]
  );
  const lastDayOfWeek = new Date(now);
  lastDayOfWeek.setDate(
    lastDayOfWeek.getDate() - weekMap[lastDayOfWeek.getDay()] + 6
  );
  lastDayOfWeek.setHours(23, 59, 59, 999);

  const firstDayFormatted = getDateView(firstDayOfWeek).slice(0, 5);
  const lastDayFormatted = getDateView(lastDayOfWeek).slice(0, 5);
  return `${firstDayFormatted} - ${lastDayFormatted}`;
}
