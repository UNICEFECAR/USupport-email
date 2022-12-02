import * as yup from "yup";

export const sendForgotPasswordEmailSchema = yup.object().shape({
  language: yup.string().required(),
  platform: yup
    .string()
    .oneOf(["client", "provider", "global-admin", "country-admin"])
    .required(),
  forgotPasswordToken: yup.string().required(),
  recipientEmail: yup.string().email().required(),
});

export const sendWelcomeEmailSchema = yup.object().shape({
  language: yup.string().required(),
  platform: yup
    .string()
    .oneOf(["client", "provider", "global-admin", "country-admin"])
    .required(),
  recipientEmail: yup.string().email().required(),
});
