import * as yup from "yup";

export const sendAdminEmailSchema = yup.object().shape({
  country: yup.string().required(),
  subject: yup.string().required(),
  text: yup.string().required(),
  title: yup.string().required(),
});
