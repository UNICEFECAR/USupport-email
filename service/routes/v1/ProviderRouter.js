import express from "express";

import {
  sendConsultationNotifyBookingEmail,
  sendConsultationNotifyRescheduleEmail,
  sendConsultationNotifyCancellationEmail,
  sendConsultationConfirmCancellationEmail,
  sendConsultationRemindStartEmail,
  sendConsultationConfirmSuggestionEmail,
  sendConsultationNotifySuggestionBookingEmail,
  sendConsultationNotifySuggestionCancellationEmail,
  sendAvailabilityRemindAddMoreSlotsEmail,
  sendReportWeeklyEmail,
  sendReportMonthlyEmail,
} from "#controllers/provider";

import {
  sendEmailSchema,
  sendConsultationRemindStartEmailSchema,
} from "#schemas/sendEmailSchemas";

const router = express.Router();

router.post("/consultation/notify/booking", async (req, res, next) => {
  /**
   * #route   POST /email/v1/provider/consultation/notify/booking
   * #desc    Send email to provider to notify about consultation booking
   */
  const language = req.header("x-language-alpha-2");
  const payload = req.body;

  return await sendEmailSchema
    .noUnknown(true)
    .strict()
    .validate({ ...payload, language })
    .then(sendConsultationNotifyBookingEmail)
    .then((result) => res.json(result).status(204))
    .catch(next);
});

router.post("/consultation/notify/reschedule", async (req, res, next) => {
  /**
   * #route   POST /email/v1/provider/consultation/notify/reschedule
   * #desc    Send email to provider to notify about consultation reschedule
   */
  const language = req.header("x-language-alpha-2");
  const payload = req.body;

  return await sendEmailSchema
    .noUnknown(true)
    .strict()
    .validate({ ...payload, language })
    .then(sendConsultationNotifyRescheduleEmail)
    .then((result) => res.json(result).status(204))
    .catch(next);
});

router.post("/consultation/notify/cancellation", async (req, res, next) => {
  /**
   * #route   POST /email/v1/provider/consultation/notify/cancellation
   * #desc    Send email to provider to notify about consultation cancellation
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

router.post("/consultation/confirm/cancellation", async (req, res, next) => {
  /**
   * #route   POST /email/v1/provider/consultation/confirm/cancellation
   * #desc    Send email to provider to confirm consultation cancellation
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

router.post("/consultation/remind/start", async (req, res, next) => {
  /**
   * #route   POST /email/v1/provider/consultation/remind/start
   * #desc    Send email to provider to remind about consultation start
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

router.post("/consultation/confirm/suggestion", async (req, res, next) => {
  /**
   * #route   POST /email/v1/provider/consultation/confirm/suggestion
   * #desc    Send email to provider to confirm consultation suggestion
   */
  const language = req.header("x-language-alpha-2");
  const payload = req.body;

  return await sendEmailSchema
    .noUnknown(true)
    .strict()
    .validate({ ...payload, language })
    .then(sendConsultationConfirmSuggestionEmail)
    .then((result) => res.json(result).status(204))
    .catch(next);
});

router.post(
  "/consultation/notify/suggestion-booking",
  async (req, res, next) => {
    /**
     * #route   POST /email/v1/provider/consultation/notify/suggestion-booking
     * #desc    Send email to provider to notify about consultation suggestion booking
     */
    const language = req.header("x-language-alpha-2");
    const payload = req.body;

    return await sendEmailSchema
      .noUnknown(true)
      .strict()
      .validate({ ...payload, language })
      .then(sendConsultationNotifySuggestionBookingEmail)
      .then((result) => res.json(result).status(204))
      .catch(next);
  }
);

router.post(
  "/consultation/notify/suggestion-cancellation",
  async (req, res, next) => {
    /**
     * #route   POST /email/v1/provider/consultation/notify/suggestion-cancellation
     * #desc    Send email to provider to notify about consultation suggestion cancellation
     */
    const language = req.header("x-language-alpha-2");
    const payload = req.body;

    return await sendEmailSchema
      .noUnknown(true)
      .strict()
      .validate({ ...payload, language })
      .then(sendConsultationNotifySuggestionCancellationEmail)
      .then((result) => res.json(result).status(204))
      .catch(next);
  }
);

router.post("/availability/remind/add-more-slots", async (req, res, next) => {
  /**
   * #route   POST /email/v1/provider/availability/remind/add-more-slots
   * #desc    Send email to provider to remind add more availability slots
   */
  const language = req.header("x-language-alpha-2");
  const payload = req.body;

  return await sendEmailSchema
    .noUnknown(true)
    .strict()
    .validate({ ...payload, language })
    .then(sendAvailabilityRemindAddMoreSlotsEmail)
    .then((result) => res.json(result).status(204))
    .catch(next);
});

router.post("/report/weekly", async (req, res, next) => {
  /**
   * #route   POST /email/v1/provider/report/weekly
   * #desc    Send email to provider containing weekly report
   */
  const language = req.header("x-language-alpha-2");
  const payload = req.body;

  // TODO: add information about the weekly report
  return await sendEmailSchema
    .noUnknown(true)
    .strict()
    .validate({ ...payload, language })
    .then(sendReportWeeklyEmail)
    .then((result) => res.json(result).status(204))
    .catch(next);
});

router.post("/report/monthly", async (req, res, next) => {
  /**
   * #route   POST /email/v1/provider/report/monthly
   * #desc    Send email to provider containing monthly report
   */
  const language = req.header("x-language-alpha-2");
  const payload = req.body;

  // TODO: add information about the monthly report
  return await sendEmailSchema
    .noUnknown(true)
    .strict()
    .validate({ ...payload, language })
    .then(sendReportMonthlyEmail)
    .then((result) => res.json(result).status(204))
    .catch(next);
});

export { router };
