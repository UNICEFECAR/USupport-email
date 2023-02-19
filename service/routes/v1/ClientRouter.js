import express from "express";

import {
  sendConsultationConfirmBookingEmail,
  sendConsultationConfirmRescheduleEmail,
  sendConsultationConfirmCancellationEmail,
  sendConsultationNotifyCancellationEmail,
  sendConsultationRemindStartEmail,
  sendConsultationNotifySuggestionEmail,
  sendConsultationConfirmSuggestionBookingEmail,
  sendConsultationConfirmSuggestionCancellationEmail,
} from "#controllers/client";

import {
  sendEmailSchema,
  sendConsultationRemindStartEmailSchema,
} from "#schemas/sendEmailSchemas";

const router = express.Router();

router.post("/consultation/confirm/booking", async (req, res, next) => {
  /**
   * #route   POST /email/v1/client/consultation/confirm/booking
   * #desc    Send email to client to confirm consultation booking
   */
  const language = req.header("x-language-alpha-2");
  const payload = req.body;

  return await sendEmailSchema
    .noUnknown(true)
    .strict()
    .validate({ ...payload, language })
    .then(sendConsultationConfirmBookingEmail)
    .then((result) => res.json(result).status(204))
    .catch(next);
});

router.post("/consultation/confirm/reschedule", async (req, res, next) => {
  /**
   * #route   POST /email/v1/client/consultation/confirm/reschedule
   * #desc    Send email to client to confirm consultation reschedule
   */
  const language = req.header("x-language-alpha-2");
  const payload = req.body;

  return await sendEmailSchema
    .noUnknown(true)
    .strict()
    .validate({ ...payload, language })
    .then(sendConsultationConfirmRescheduleEmail)
    .then((result) => res.json(result).status(204))
    .catch(next);
});

router.post("/consultation/confirm/cancellation", async (req, res, next) => {
  /**
   * #route   POST /email/v1/client/consultation/confirm/cancellation
   * #desc    Send email to client to confirm consultation cancellation
   */
  const language = req.header("x-language-alpha-2");
  const payload = req.body;

  return await sendEmailSchema
    .noUnknown(true)
    .strict()
    .validate({ ...payload, language })
    .then(sendConsultationConfirmCancellationEmail)
    .then((result) => res.json(result).status(204))
    .catch(next);
});

router.post("/consultation/notify/cancellation", async (req, res, next) => {
  /**
   * #route   POST /email/v1/client/consultation/notify/cancellation
   * #desc    Send email to client to notify about consultation cancellation
   */
  const language = req.header("x-language-alpha-2");
  const payload = req.body;

  return await sendEmailSchema
    .noUnknown(true)
    .strict()
    .validate({ ...payload, language })
    .then(sendConsultationNotifyCancellationEmail)
    .then((result) => res.json(result).status(204))
    .catch(next);
});

router.post("/consultation/remind/start", async (req, res, next) => {
  /**
   * #route   POST /email/v1/client/consultation/remind/start
   * #desc    Send email to client to remind about consultation start
   */
  const language = req.header("x-language-alpha-2");
  const payload = req.body;

  return await sendConsultationRemindStartEmailSchema
    .noUnknown(true)
    .strict()
    .validate({ ...payload, language })
    .then(sendConsultationRemindStartEmail)
    .then((result) => res.json(result).status(204))
    .catch(next);
});

router.post("/consultation/notify/suggestion", async (req, res, next) => {
  /**
   * #route   POST /email/v1/client/consultation/notify/suggestion
   * #desc    Send email to client to notify about consultation suggestion
   */
  const language = req.header("x-language-alpha-2");
  const payload = req.body;

  return await sendEmailSchema
    .noUnknown(true)
    .strict()
    .validate({ ...payload, language })
    .then(sendConsultationNotifySuggestionEmail)
    .then((result) => res.json(result).status(204))
    .catch(next);
});

router.post(
  "/consultation/confirm/suggestion-booking",
  async (req, res, next) => {
    /**
     * #route   POST /email/v1/client/consultation/confirm/suggestion-booking
     * #desc    Send email to client to confirm consultation suggestion booking
     */
    const language = req.header("x-language-alpha-2");
    const payload = req.body;

    return await sendEmailSchema
      .noUnknown(true)
      .strict()
      .validate({ ...payload, language })
      .then(sendConsultationConfirmSuggestionBookingEmail)
      .then((result) => res.json(result).status(204))
      .catch(next);
  }
);

router.post(
  "/consultation/confirm/suggestion-cancellation",
  async (req, res, next) => {
    /**
     * #route   POST /email/v1/client/consultation/confirm/suggestion-cancellation
     * #desc    Send email to client to confirm consultation suggestion cancellation
     */
    const language = req.header("x-language-alpha-2");
    const payload = req.body;

    return await sendEmailSchema
      .noUnknown(true)
      .strict()
      .validate({ ...payload, language })
      .then(sendConsultationConfirmSuggestionCancellationEmail)
      .then((result) => res.json(result).status(204))
      .catch(next);
  }
);

export { router };
