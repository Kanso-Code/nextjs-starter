import * as yup from 'yup';

export const schema = yup
  .object({
    title: yup.string().required('This field is mandatory'),
    body: yup.string().required('This field is mandatory'),
  })
  .required();
