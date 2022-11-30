import nodemailer from "nodemailer";

import { sendForgotPasswordEmail, sendWelcomeEmail } from "#controllers/system";

import {
  sendConsultationConfirmBookingEmail as sendConsultationConfirmBookingEmailClient,
  sendConsultationConfirmRescheduleEmail as sendConsultationConfirmRescheduleEmailClient,
  sendConsultationConfirmCancellationEmail as sendConsultationConfirmCancellationEmailClient,
  sendConsultationNotifyCancellationEmail as sendConsultationNotifyCancellationEmailClient,
  sendConsultationRemindStartEmail as sendConsultationRemindStartEmailClient,
  sendConsultationNotifySuggestionEmail as sendConsultationNotifySuggestionEmailClient,
  sendConsultationConfirmSuggestionBookingEmail as sendConsultationConfirmSuggestionBookingEmailClient,
  sendConsultationConfirmSuggestionCancellationEmail as sendConsultationConfirmSuggestionCancellationEmailClient,
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
} from "#controllers/provider";

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
  const { emailType, data, recipientEmail, language } = messageJSON;
  const payload = {
    language,
    recipientEmail,
    ...data,
  };

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
    default:
      console.log("EMAIL TYPE NOT RECOGNIZED"); // Maybe you can throw an error, or just keep it as a log
  }
};
