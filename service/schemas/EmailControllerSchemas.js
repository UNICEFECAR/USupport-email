import * as yup from "yup";

export const sendEmailSchema = yup.object().shape({
    to: yup.array().of(yup.string().email().required()).required(),
    subject: yup.string().required(), 
    text: yup.string().required(),
    html: yup.string().required(), // Not sure about the exact type
    details:  yup.string().required(), // Not sure about the exact type
  });