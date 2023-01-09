import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    Primary: '#DA2535',
    Black: '#292929',
    Gray: '#616161',
    White_200: '#F3F3F3',
    White: '#FBFBFB',
  },
  container: {
    maxWidth: '1200px',
    padding: '0 1rem',
    margin: '0 auto',
  },
};

type Props = {
  children?: React.ReactNode;
};

const Theme = ({ children }: Props) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
