import { Box } from '@mui/material';
import { TextLink } from '../../app/app.styled';

export default function Footer() {
  return (
    <Box component="footer" sx={{ display: 'flex', gap: 8, mt: 2 }}>
      <TextLink to="/privacy">Privacy policy</TextLink>
      <TextLink to="/terms">Terms of use</TextLink>
      <TextLink to="/contact">Contact us</TextLink>
    </Box>
  );
}
