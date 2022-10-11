import nodemailer from "nodemailer";
import _ from "lodash";

import { emailTemplateV1 } from "../utils/templates.js";

const EMAIL_SENDER = process.env.EMAIL_SENDER
const EMAIL_SENDER_PASSWORD = process.env.EMAIL_SENDER_PASSWORD
const EMAIL_HOST = process.env.EMAIL_HOST
const EMAIL_PORT = process.env.EMAIL_PORT

/**
 * This is the email controller that will be used to send emails
 * @params {}
 * @returns void
 *  */
export const sendEmail = async (props) => {
  const { to, subject, plainText, html, details } = props;

  const from = `IT department 🤙🏻 <${EMAIL_SENDER}>`;

  let computedHTML = emailTemplateV1(html, details);

  let transporter = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: EMAIL_PORT,
    secure: true,
    auth: {
      user: EMAIL_SENDER,
      pass: EMAIL_SENDER_PASSWORD,
    },
  })
    .catch(err => { throw err })

  await transporter.sendMail({
    from: from,
    to: _.join(to, ", "),
    subject: subject,
    text: plainText,
    html: computedHTML,
  })
    .catch(err => { throw err })

  return;
};
