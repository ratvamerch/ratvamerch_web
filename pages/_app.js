import '../styles/globals.css';
import Head from "next/head";
import Script from 'next/script';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* <html lang="en"/>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/> */}
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
