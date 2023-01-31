import * as yup from "yup";

const PLATFORM_TYPE = ["client", "provider", "global-admin", "country-admin"];

export const sendWelcomeEmailSchema = yup.object().shape({
  language: yup.string().required(),
  platform: yup.string().oneOf(PLATFORM_TYPE).required(),
  recipientEmail: yup.string().email().required(),
});

export const sendForgotPasswordEmailSchema = sendWelcomeEmailSchema.shape({
  forgotPasswordToken: yup.string().required(),
});
