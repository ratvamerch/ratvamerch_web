import '../styles/globals.css';
import Head from "next/head";
import Script from 'next/script';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="./landingPic.png"/>
      </Head>
      <Script src="https://code.iconify.design/2/2.2.1/iconify.min.js" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
    
  )
}

export default MyApp
