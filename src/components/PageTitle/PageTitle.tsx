import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { LogoIcon } from '../../assets/icons/logo.icon';
import { getUser } from '../../store/slice/user.slice';

type Props = {
  children: React.ReactNode;
};

export default function PageTitle({ children }: Props) {
  const user = useSelector(getUser);
  return (
    <Box>
      <NavLink to={user.token ? '/' : '/login'}>
        <LogoIcon />
      </NavLink>
      <Typography variant="h2" mt={4} mb={4.5} sx={{ fontSize: '56px', letterSpacing: '-0.5px' }}>
        {children}
      </Typography>
    </Box>
  );
}
