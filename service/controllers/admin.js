import nodemailer from "nodemailer";

import { AdminTemplate } from "../utils/templates.js";

const EMAIL_SENDER = process.env.EMAIL_SENDER;
const EMAIL_SENDER_PASSWORD = process.env.EMAIL_SENDER_PASSWORD;
const EMAIL_HOST = process.env.EMAIL_HOST;
const EMAIL_PORT = process.env.EMAIL_PORT;
const RECIEVERS = process.env.RECIEVERS;

/**
 * This is the email controller that will be used to send emails
 * @params {}
 * @returns void
 *  */
export const sendAdminEmail = async (props) => {
  const { subject, title, text } = props;

  const from = `USupport <${EMAIL_SENDER}>`;

  let computedHTML = AdminTemplate(title, text);

  try {
    let transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port: EMAIL_PORT,
      secure: true,
      auth: {
        user: EMAIL_SENDER,
        pass: EMAIL_SENDER_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: from,
      to: RECIEVERS,
      subject: subject,
      html: computedHTML,
    });
  } catch (err) {
    throw err;
  }

  return { "success": true };
};
