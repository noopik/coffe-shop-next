import '../styles/globals.css';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }) {
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
    </>
  );
}

export default MyApp;
