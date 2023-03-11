import '@/styles/globals.css'
import Head from "next/head";


export default function App({ Component, pageProps }) {
<Head>
          <link rel="shortcut icon" href="favicon.ico" />
</Head>
  return <Component {...pageProps} />
}
