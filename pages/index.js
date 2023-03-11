import { Inter } from 'next/font/google'
import { Navigator } from '../components/navigator'
import { Footer } from '../components/footer'
import { Introduction } from '../components/body/introduction'
import { Post } from '../components/body/post'
import { Contact } from '../components/body/contact'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { routes } from '../components/routes'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

const validPage = ['home', 'post', 'contact']

export default function Home() {
  const router = useRouter()
  let {page} = router.query
  if (page == null || validPage.findIndex(p => p == page) == -1) {
    page = 'home'
  }
  return (
    <>
    <Head>
      <title>Keming Blog</title>
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
        <Navigator page = {page}/>
        {(page == 'home') && <Introduction />}
        {(page == 'post') && <Post />}
        {(page == 'contact') && <Contact />}

        <Footer />
    </>
  )
}
