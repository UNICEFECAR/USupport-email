import dotenv from "dotenv";
import nodemailer from "nodemailer";
import _ from "lodash";
import { emailTemplateV1 } from "../utils/templates.js";

// This file will contain all the controllers for the /email/v1 routes

dotenv.config();

/**
 *
 * #controller   email_send_post
 * #desc This is the email controller that will be used to send emails
 *
 *  */
export const email_send_post = async (req, res) => {
  const { to, subject, plainText, html, details } = req.body;

  //Compute from who the email should be
  const from = `IT department 🤙🏻 <${process.env.EMAIL_SENDER}>`;

  let computedHTML = emailTemplateV1(html, details);
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: true,
      auth: {
        user: process.env.EMAIL_SENDER,
        pass: process.env.EMAIL_SENDER_PASSWORD,
      },
    });
    await transporter.sendMail({
      from: from, // sender addresss
      to: _.join(to, ", "), // list of receivers
      subject: subject, // Subject line
      text: plainText, // plain text body
      html: computedHTML, // html body
    });
    res.status(204).send();
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};
