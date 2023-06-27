import { yupResolver } from '@hookform/resolvers/yup';
import { Box, InputLabel } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Button, TextField, TextLink } from '../../app/app.styled';
import { schema } from './login.schema';
import { LoginData } from './login.types';

export default function LoginForm() {
  const defaultValues = {
    email: '',
    password: '',
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginData>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const onSubmit = async (formData: LoginData) => {
    try {
      console.log('LOGIN');
      // const { data } = await logIn({
      //   variables: {
      //     ...formData,
      //   },
      // });
      // if (data) {
      //   setAuth(data.login);
      //   navigate('/');
      //   toast('Logged in!');
      // }
    } catch (err: any) {
      // toast(err.message);
    }
  };

  return (
    <Box component="form" name="login" onSubmit={handleSubmit(onSubmit)} sx={{ display: 'flex', flexDirection: 'column', maxWidth: '400px' }}>
      <InputLabel sx={{ fontSize: '14px', ml: 2 }}>Email</InputLabel>
      <TextField variant="outlined" sx={{ mb: 3.5 }} />

      <InputLabel sx={{ fontSize: '14px', ml: 2 }}>Password</InputLabel>
      <TextField type="password" variant="outlined" />

      <TextLink to="/forgot" sx={{ px: 0.5, py: 0.25 }}>
        Forgot your password?
      </TextLink>

      <Button type="submit" variant="contained" sx={{ mt: 6 }}>
        Log in
      </Button>
    </Box>
  );
}
