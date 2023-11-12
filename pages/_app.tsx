import Layout from '@/components/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from '../components/globalStyles'
import React, { useEffect, useState } from 'react'
import PrivateRoute from '@/components/PrivateRoute'

const theme: DefaultTheme = {
  colors: {
    primary: '#000',
    secondary: '#999',
  },
}

const whitelistUrls = ['/about', '/cart', '/', '/404', '/checkout', '/products']

export default function App({ Component, pageProps }: AppProps) {

  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Layout>
            <PrivateRoute whitelistUrls={whitelistUrls}>
              <Component {...pageProps} />

            </PrivateRoute>
          </Layout>
        </ThemeProvider>
      </>
    )
  }
}
