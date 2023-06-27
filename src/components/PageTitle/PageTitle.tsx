import { Box, Typography, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { LogoIcon } from '../../assets/icons/logo.icon';
import { getUser } from '../../store/slice/user.slice';

type Props = {
  children: React.ReactNode;
};

export default function PageTitle({ children }: Props) {
  const user = useSelector(getUser);
  const isMobile = useMediaQuery('(max-width:600px)');
  const isMedium = useMediaQuery('(max-width:900px)');

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: isMedium ? 'center' : 'baseline' }}>
      <NavLink to={user.token ? '/' : '/login'}>
        <LogoIcon />
      </NavLink>
      <Typography variant="h2" mt={4} mb={4.5} sx={{ fontSize: isMobile ? '32px' : '56px', letterSpacing: '-0.5px', textAlign: isMedium ? 'center' : 'left' }}>
        {children}
      </Typography>
    </Box>
  );
}
