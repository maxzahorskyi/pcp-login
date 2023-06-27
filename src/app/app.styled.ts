import { Button as ButtonMUI, TextField as TextFieldMUI } from '@mui/material';
import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

const Button = styled(ButtonMUI)(() => ({
  fontSize: '16px',
  textTransform: 'none',
  ':hover': {
    backgroundColor: '#846e54eb',
  },
}));

const TextField = styled(TextFieldMUI)(() => ({
  input: {
    padding: '12px 16px',
  },
}));

const TextLink = styled(NavLink)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: 500,
  letterSpacing: 0.1,
  color: theme.palette.text.primary,
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
}));

export { Button, TextLink, TextField };
