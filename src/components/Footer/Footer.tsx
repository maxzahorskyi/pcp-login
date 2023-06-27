import { Box, useMediaQuery } from '@mui/material';
import { useMemo } from 'react';
import { TextLink } from '../../app/app.styled';

export default function Footer() {
  const isMobile = useMediaQuery('(max-width:600px)');

  const footerStyles = useMemo(() => {
    return isMobile ? { gap: 2, justifyContent: 'center' } : { gap: 8 };
  }, [isMobile]);

  return (
    <Box component="footer" sx={{ display: 'flex', mt: 2, ...footerStyles }}>
      <TextLink to="/privacy">Privacy policy</TextLink>
      <TextLink to="/terms">Terms of use</TextLink>
      <TextLink to="/contact">Contact us</TextLink>
    </Box>
  );
}
