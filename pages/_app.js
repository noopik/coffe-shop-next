import '../styles/globals.css';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Breakpoints } from '../src/utils';
import { useStore } from '../src/redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistStore } from 'redux-persist';
import NextNProgress from 'nextjs-progressbar';

const GlobalStyle = createGlobalStyle`
  .container {
    width: 1600px;
    margin: 0 auto;
    &.main {
    margin-top: 120px;
    }
    ${Breakpoints.lessThan('2xl')`
      width: 90%;
    `}
    ${Breakpoints.lessThan('md')`
      width: 100%;
      padding: 0 24px;
    `}
  }
`;

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const persistor = persistStore(store, {}, function () {
    persistor.persist();
  });
  return (
    <>
      <Head>
        {/* START = CUSTOME FONTS */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Rubik:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        {/* END = CUSTOME FONTS */}
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NextNProgress
            color="#FFBA33"
            startPosition={0.3}
            stopDelayMs={200}
            height={4}
            showOnShallow={true}
          />
          <GlobalStyle />
          <Component {...pageProps} />
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;