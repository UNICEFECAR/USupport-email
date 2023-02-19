import * as yup from "yup";

export const sendEmailSchema = yup.object().shape({
  language: yup.string().required(),
  recipientEmail: yup.string().email().required(),
});

export const sendConsultationRemindStartEmailSchema = sendEmailSchema.shape({
  minToConsultation: yup.number().required(),
});
