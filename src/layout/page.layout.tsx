import { Box, useMediaQuery } from '@mui/material';
import Footer from '../components/Footer/Footer';

type Props = {
  children: JSX.Element;
};

export default function PageLayout({ children }: Props) {
  const isMobile = useMediaQuery('(max-width:600px)');
  const isMedium = useMediaQuery('(max-width:900px)');

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        alignItems: isMedium ? 'center' : 'baseline',
      }}
    >
      <Box
        sx={{
          flex: 1,
          paddingTop: isMobile ? 0 : '17vh',
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
