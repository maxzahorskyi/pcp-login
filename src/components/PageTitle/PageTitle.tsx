import { Box, Typography } from '@mui/material';
import { LogoIcon } from '../../assets/icons/logo.icon';

type Props = {
  children: React.ReactNode;
};

export default function PageTitle({ children }: Props) {
  return (
    <Box>
      <LogoIcon />
      <Typography variant="h2" mt={4} mb={4.5} sx={{ fontSize: '56px', letterSpacing: '-0.5px' }}>
        {children}
      </Typography>
    </Box>
  );
}
