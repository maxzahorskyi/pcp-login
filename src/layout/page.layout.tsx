import { Box } from '@mui/material';
import Footer from '../components/Footer/Footer';

type Props = {
  children: JSX.Element;
};

export default function PageLayout({ children }: Props) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
      }}
    >
      <Box
        sx={{
          flex: 1,
          paddingTop: '17vh',
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
