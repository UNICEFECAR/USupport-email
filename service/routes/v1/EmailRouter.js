import express from "express";

import { sendEmail } from "#controllers/email";

import { sendEmailSchema } from "#schemas/EmailControllerSchemas"

const router = express.Router();

router
    .route("/")
    .post(async (req, res, next) => {
        /**
         * #route   POST /user/v1/email
         * #desc    Request to send an email
         */
        const payload = req.body

        return await sendEmailSchema
            .noUnknown(true)
            .strict()
            .validate(payload)
            .then(sendEmail)
            .then((result) => res.json(result).status(204))
            .catch(next)
    })

export { router };
