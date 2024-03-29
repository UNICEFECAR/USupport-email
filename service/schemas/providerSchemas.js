import * as yup from "yup";

export const sendConsultationNotifyBookingEmailSchema = yup.object().shape({
  language: yup.string().required(),
  recipientSchema: yup.string().email().required(),
});

export const sendConsultationNotifyRescheduleEmailSchema = yup.object().shape({
  language: yup.string().required(),
  recipientSchema: yup.string().email().required(),
});

export const sendConsultationNotifyCancellationEmailSchema = yup
  .object()
  .shape({
    language: yup.string().required(),
    recipientSchema: yup.string().email().required(),
  });

export const sendConsultationConfirmCancellationEmailSchema = yup
  .object()
  .shape({
    language: yup.string().required(),
    recipientSchema: yup.string().email().required(),
  });

export const sendConsultationRemindStartEmailSchema = yup.object().shape({
  language: yup.string().required(),
  recipientSchema: yup.string().email().required(),
  minToConsultation: yup.number().required(),
});

export const sendConsultationConfirmSuggestionEmailSchema = yup.object().shape({
  language: yup.string().required(),
  recipientSchema: yup.string().email().required(),
});

export const sendConsultationNotifySuggestionBookingEmailSchema = yup
  .object()
  .shape({
    language: yup.string().required(),
    recipientSchema: yup.string().email().required(),
  });

export const sendConsultationNotifySuggestionCancellationEmailSchema = yup
  .object()
  .shape({
    language: yup.string().required(),
    recipientSchema: yup.string().email().required(),
  });

export const sendAvailabilityRemindAddMoreSlotsEmailSchema = yup
  .object()
  .shape({
    language: yup.string().required(),
    recipientSchema: yup.string().email().required(),
  });

export const sendReportWeeklyEmailSchema = yup.object().shape({
  language: yup.string().required(),
  recipientSchema: yup.string().email().required(),
});

export const sendReportMonthlyEmailSchema = yup.object().shape({
  language: yup.string().required(),
  recipientSchema: yup.string().email().required(),
});

export const sendRegistrationNotifySchema = yup.object().shape({
  language: yup.string().required(),
  recipientSchema: yup.string().email().required(),
  password: yup.string().required(),
});
