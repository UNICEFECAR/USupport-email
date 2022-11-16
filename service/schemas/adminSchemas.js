import * as yup from "yup";

export const sendAdminEmailSchema = yup.object().shape({
  subject: yup.string().required(),
  text: yup.string().required(),
  title: yup.string().required(),
});
