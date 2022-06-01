import '../styles/globals.css';
import Head from "next/head";
import Script from 'next/script';
import { ThemeProvider } from 'next-themes'
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="./rv_logo.png"/>
      </Head>
      <Script src="https://code.iconify.design/2/2.2.1/iconify.min.js" />
      <ThemeProvider attribute='class' >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
    
  )
}

export default MyApp
