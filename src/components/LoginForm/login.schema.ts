import * as yup from 'yup';

export const schema = yup.object({
  email: yup.string().email('Must be a valid email').required('Email is required'),
  password: yup.string().min(4, 'Minimum 4 characters').required('Password is required'),
});
