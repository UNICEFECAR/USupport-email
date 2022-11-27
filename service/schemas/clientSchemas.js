import * as yup from "yup";

export const sendConsultationConfirmBookingEmailSchema = yup.object().shape({
  language: yup.string().required(),
  clientEmail: yup.string().email().required(),
});

export const sendConsultationConfirmRescheduleEmailSchema = yup.object().shape({
  language: yup.string().required(),
  clientEmail: yup.string().email().required(),
});

export const sendConsultationConfirmCancellationEmailSchema = yup
  .object()
  .shape({
    language: yup.string().required(),
    clientEmail: yup.string().email().required(),
  });

export const sendConsultationNotifyCancellationEmailSchema = yup
  .object()
  .shape({
    language: yup.string().required(),
    clientEmail: yup.string().email().required(),
  });

export const sendConsultationRemindStartEmailSchema = yup.object().shape({
  language: yup.string().required(),
  clientEmail: yup.string().email().required(),
});

export const sendConsultationNotifySuggestionEmailSchema = yup.object().shape({
  language: yup.string().required(),
  clientEmail: yup.string().email().required(),
});

export const sendConsultationConfirmSuggestionBookingEmailSchema = yup
  .object()
  .shape({
    language: yup.string().required(),
    clientEmail: yup.string().email().required(),
  });

export const sendConsultationConfirmSuggestionCancellationEmailSchema = yup
  .object()
  .shape({
    language: yup.string().required(),
    clientEmail: yup.string().email().required(),
  });
