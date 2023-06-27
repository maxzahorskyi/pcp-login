import { yupResolver } from '@hookform/resolvers/yup';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Box, InputAdornment, InputLabel, useMediaQuery, useTheme } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Button, TextField, TextLink } from '../../app/app.styled';
import { useLoginMutation } from '../../store/api/auth.api';
import { setUser } from '../../store/slice/user.slice';
import { schema } from './login.schema';
import { LoginData } from './login.types';

export default function LoginForm() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const isMobile = useMediaQuery('(max-width:600px)');
  const isMedium = useMediaQuery('(max-width:900px)');

  const [login] = useLoginMutation();

  const defaultValues = {
    email: '',
    password: '',
  };
  const {
    register,
    formState: { errors },
    setError,
    handleSubmit,
  } = useForm<LoginData>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const onSubmit = async (formData: LoginData) => {
    try {
      const response = await login(formData);
      if ('error' in response) {
        // @ts-ignore
        throw Error(response.error.data);
      }
      if ('data' in response) {
        dispatch(setUser(response.data));
      }
    } catch (err: any) {
      setError('password', { message: err.message });
    }
  };

  return (
    <Box
      component="form"
      name="login"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: 'flex', flexDirection: 'column', maxWidth: isMobile ? '100%' : '400px', mx: isMedium ? 'auto' : 0 }}
    >
      <InputLabel sx={{ fontSize: '14px', ml: 2, color: errors.email ? theme.palette.error.main : theme.palette.text.primary }}>Email</InputLabel>
      <TextField
        variant="outlined"
        sx={{ mb: 3.5 }}
        {...register('email')}
        error={!!errors.email || !!errors.password}
        helperText={errors.email?.message}
        FormHelperTextProps={{
          sx: {
            ml: 0,
          },
        }}
        InputProps={{
          sx: { pr: 0 },
          endAdornment: (!!errors.email || !!errors.password) && (
            <InputAdornment position="start">
              <ErrorOutlineIcon sx={{ color: theme.palette.error.main }} />
            </InputAdornment>
          ),
        }}
      />

      <InputLabel sx={{ fontSize: '14px', ml: 2, color: errors.password ? theme.palette.error.main : theme.palette.text.primary }}>Password</InputLabel>
      <TextField
        type="password"
        variant="outlined"
        {...register('password')}
        error={!!errors.password}
        helperText={errors.password?.message}
        FormHelperTextProps={{
          sx: {
            ml: 0,
          },
        }}
        InputProps={{
          sx: { pr: 0 },
          endAdornment: !!errors.password && (
            <InputAdornment position="start">
              <ErrorOutlineIcon sx={{ color: theme.palette.error.main }} />
            </InputAdornment>
          ),
        }}
      />

      <TextLink to="/forgot" sx={{ px: 0.5, py: 0.25 }}>
        Forgot your password?
      </TextLink>

      <Button type="submit" variant="contained" sx={{ mt: 6 }}>
        Log in
      </Button>
    </Box>
  );
}
