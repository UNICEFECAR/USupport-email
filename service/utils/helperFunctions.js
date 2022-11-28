import nodemailer from "nodemailer";

import { sendForgotPasswordEmail, sendWelcomeEmail } from "#controllers/system";

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
  const { emailType, emailArgs, recipientEmail, language } = messageJSON;

  switch (emailType) {
    case "signupWelcome": {
      const { platform } = emailArgs;
      sendWelcomeEmail({ language, platform });
      break;
    }
    case "forgotPassword": {
      const { platform, forgotPasswordToken } = emailArgs;
      sendForgotPasswordEmail({ language, platform, forgotPasswordToken });
      break;
    }
    // Add other email types here
    default:
      console.log("EMAIL TYPE NOT RECOGNIZED"); // Maybe you can throw an error, or just keep it as a log
  }
};
