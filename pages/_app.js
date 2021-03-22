import Head from 'next/head';


import "../css/bootstrap.min.css";
import "../css/bootstrap-grid.min.css";
import "../css/animate.css";
import "../css/index.css";
import { useEffect } from 'react';



function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>MatheusPSantos | personal website</title>
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
        <link rel="shortcut icon" href="/favicon.png" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-V7XQZHP6X2"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', 'G-V7XQZHP6X2');
          `}} />
      </Head>

      <Component {...pageProps} />

      <script type="text/javascript" src="js/jquery-3.3.1.min.js"></script>
      <script src="js/bootstrap.min.js"></script>
      <script src="js/wow.min.js"></script>
      <script type="text/javascript" src="js/index.js"></script>
      <script dangerouslySetInnerHTML={{
        __html: `new WOW().init();`
      }} />
    </>
  );
}

export default MyApp;