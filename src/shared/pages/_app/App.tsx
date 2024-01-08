import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Head from 'next/head';

import { Layout } from '~/shared/components';
import { wrapper } from '~/shared/store';
import { theme } from '~/shared/theme';

import { useApiDebugger } from './hooks/useApiDebugger';

if (typeof window !== 'undefined') (window as any).app = 'boilerplate';

function BoilerplateApp({ Component, pageProps }: any) {
  useApiDebugger();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <title>Next.js App Boilerplate</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export const App = wrapper.withRedux(BoilerplateApp);
