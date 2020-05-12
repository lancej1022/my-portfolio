import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import theme from '../styles/theme';
import '../styles/global.scss';
import '../components/NavBar/Hamburger/Hamburger.scss';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
