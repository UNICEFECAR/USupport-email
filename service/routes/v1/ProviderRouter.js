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
  sendConsultationNotifyBookingEmailSchema,
  sendConsultationNotifyRescheduleEmailSchema,
  sendConsultationNotifyCancellationEmailSchema,
  sendConsultationConfirmCancellationEmailSchema,
  sendConsultationRemindStartEmailSchema,
  sendConsultationConfirmSuggestionEmailSchema,
  sendConsultationNotifySuggestionBookingEmailSchema,
  sendConsultationNotifySuggestionCancellationEmailSchema,
  sendAvailabilityRemindAddMoreSlotsEmailSchema,
  sendReportWeeklyEmailSchema,
  sendReportMonthlyEmailSchema,
} from "#schemas/providerSchemas";

const router = express.Router();

router.route("/consultation/notify/booking").post(async (req, res, next) => {
  /**
   * #route   POST /email/v1/provider/consultation/notify/booking
   * #desc    Send email to provider to notify about consultation booking
   */
  const language = req.header("x-language-alpha-2");

  const payload = req.body;

  return await sendConsultationNotifyBookingEmailSchema
    .noUnknown(true)
    .strict()
    .validate({ language, ...payload })
    .then(sendConsultationNotifyBookingEmail)
    .then((result) => res.json(result).status(204))
    .catch(next);
});

router.route("/consultation/notify/reschedule").post(async (req, res, next) => {
  /**
   * #route   POST /email/v1/provider/consultation/notify/reschedule
   * #desc    Send email to provider to notify about consultation reschedule
   */
  const language = req.header("x-language-alpha-2");

  const payload = req.body;

  return await sendConsultationNotifyRescheduleEmailSchema
    .noUnknown(true)
    .strict()
    .validate({ language, ...payload })
    .then(sendConsultationNotifyRescheduleEmail)
    .then((result) => res.json(result).status(204))
    .catch(next);
});

router
  .route("/consultation/notify/cancellation")
  .post(async (req, res, next) => {
    /**
     * #route   POST /email/v1/provider/consultation/notify/cancellation
     * #desc    Send email to provider to notify about consultation cancellation
     */
    const language = req.header("x-language-alpha-2");

    const payload = req.body;

    return await sendConsultationNotifyCancellationEmailSchema
      .noUnknown(true)
      .strict()
      .validate({ language, ...payload })
      .then(sendConsultationNotifyCancellationEmail)
      .then((result) => res.json(result).status(204))
      .catch(next);
  });

router
  .route("/consultation/confirm/cancellation")
  .post(async (req, res, next) => {
    /**
     * #route   POST /email/v1/provider/consultation/confirm/cancellation
     * #desc    Send email to provider to confirm consultation cancellation
     */
    const language = req.header("x-language-alpha-2");

    const payload = req.body;

    return await sendConsultationConfirmCancellationEmailSchema
      .noUnknown(true)
      .strict()
      .validate({ language, ...payload })
      .then(sendConsultationConfirmCancellationEmail)
      .then((result) => res.json(result).status(204))
      .catch(next);
  });

router.route("/consultation/remind/start").post(async (req, res, next) => {
  /**
   * #route   POST /email/v1/provider/consultation/remind/start
   * #desc    Send email to provider to remind about consultation start
   */
  const language = req.header("x-language-alpha-2");

  const payload = req.body;

  return await sendConsultationRemindStartEmailSchema
    .noUnknown(true)
    .strict()
    .validate({ language, ...payload })
    .then(sendConsultationRemindStartEmail)
    .then((result) => res.json(result).status(204))
    .catch(next);
});

router
  .route("/consultation/confirm/suggestion")
  .post(async (req, res, next) => {
    /**
     * #route   POST /email/v1/provider/consultation/confirm/suggestion
     * #desc    Send email to provider to confirm consultation suggestion
     */
    const language = req.header("x-language-alpha-2");

    const payload = req.body;

    return await sendConsultationConfirmSuggestionEmailSchema
      .noUnknown(true)
      .strict()
      .validate({ language, ...payload })
      .then(sendConsultationConfirmSuggestionEmail)
      .then((result) => res.json(result).status(204))
      .catch(next);
  });

router
  .route("/consultation/notify/suggestion-booking")
  .post(async (req, res, next) => {
    /**
     * #route   POST /email/v1/provider/consultation/notify/suggestion-booking
     * #desc    Send email to provider to notify about consultation suggestion booking
     */
    const language = req.header("x-language-alpha-2");

    const payload = req.body;

    return await sendConsultationNotifySuggestionBookingEmailSchema
      .noUnknown(true)
      .strict()
      .validate({ language, ...payload })
      .then(sendConsultationNotifySuggestionBookingEmail)
      .then((result) => res.json(result).status(204))
      .catch(next);
  });

router
  .route("/consultation/notify/suggestion-cancellation")
  .post(async (req, res, next) => {
    /**
     * #route   POST /email/v1/provider/consultation/notify/suggestion-cancellation
     * #desc    Send email to provider to notify about consultation suggestion cancellation
     */
    const language = req.header("x-language-alpha-2");

    const payload = req.body;

    return await sendConsultationNotifySuggestionCancellationEmailSchema
      .noUnknown(true)
      .strict()
      .validate({ language, ...payload })
      .then(sendConsultationNotifySuggestionCancellationEmail)
      .then((result) => res.json(result).status(204))
      .catch(next);
  });

router
  .route("/availability/remind/add-more-slots")
  .post(async (req, res, next) => {
    /**
     * #route   POST /email/v1/provider/availability/remind/add-more-slots
     * #desc    Send email to provider to remind add more availability slots
     */
    const language = req.header("x-language-alpha-2");

    const payload = req.body;

    return await sendAvailabilityRemindAddMoreSlotsEmailSchema
      .noUnknown(true)
      .strict()
      .validate({ language, ...payload })
      .then(sendAvailabilityRemindAddMoreSlotsEmail)
      .then((result) => res.json(result).status(204))
      .catch(next);
  });

router.route("/report/weekly").post(async (req, res, next) => {
  /**
   * #route   POST /email/v1/provider/report/weekly
   * #desc    Send email to provider containing weekly report
   */
  const language = req.header("x-language-alpha-2");

  const payload = req.body;

  // TODO: add information about the weekly report
  return await sendReportWeeklyEmailSchema
    .noUnknown(true)
    .strict()
    .validate({ language, ...payload })
    .then(sendReportWeeklyEmail)
    .then((result) => res.json(result).status(204))
    .catch(next);
});

router.route("/report/monthly").post(async (req, res, next) => {
  /**
   * #route   POST /email/v1/provider/report/monthly
   * #desc    Send email to provider containing monthly report
   */
  const language = req.header("x-language-alpha-2");

  const payload = req.body;

  // TODO: add information about the monthly report
  return await sendReportMonthlyEmailSchema
    .noUnknown(true)
    .strict()
    .validate({ language, ...payload })
    .then(sendReportMonthlyEmail)
    .then((result) => res.json(result).status(204))
    .catch(next);
});

export { router };
