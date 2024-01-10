import * as yup from 'yup';

export const schema = yup
  .object({
    title: yup.string().required(),
    body: yup.string().required(),
  })
  .required();
