import express from "express";

import { sendForgotPasswordEmail, sendWelcomeEmail } from "#controllers/system";

import {
  sendForgotPasswordEmailSchema,
  sendWelcomeEmailSchema,
} from "#schemas/systemSchemas";

const router = express.Router();

router.route("/forgot-password").post(async (req, res, next) => {
  /**
   * #route   POST /email/v1/system/forgot-password
   * #desc    Request to send an email for forgot password
   */
  const language = req.header("x-language-alpha-2");

  const payload = req.body;

  return await sendForgotPasswordEmailSchema
    .noUnknown(true)
    .strict()
    .validate({ language, ...payload })
    .then(sendForgotPasswordEmail)
    .then((result) => res.json(result).status(204))
    .catch(next);
});

router.route("/welcome").post(async (req, res, next) => {
  /**
   * #route   POST /email/v1/system/welcome
   * #desc    Request to send a welcome email
   */
  const language = req.header("x-language-alpha-2");

  const payload = req.body;

  return await sendWelcomeEmailSchema
    .noUnknown(true)
    .strict()
    .validate({ language, ...payload })
    .then(sendWelcomeEmail)
    .then((result) => res.json(result).status(204))
    .catch(next);
});

export { router };
