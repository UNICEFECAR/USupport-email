import express from "express";

import { sendAdminEmail } from "#controllers/admin";

import { sendAdminEmailSchema } from "#schemas/adminSchemas";

const router = express.Router();

router.route("/").post(async (req, res, next) => {
  /**
   * #route   POST /email/v1/admin/
   * #desc    Request to send an email
   */
  const country = req.header("x-country-alpha-2");
  const payload = req.body;

  return await sendAdminEmailSchema
    .noUnknown(true)
    .strict()
    .validate({ country, ...payload })
    .then(sendAdminEmail)
    .then((result) => res.json(result).status(204))
    .catch(next);
});

export { router };
