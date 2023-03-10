import { Inter } from 'next/font/google'
import { Navigator } from './navigator'
import { Footer } from './footer'
import { Introduction } from './body/introduction'
import { Post } from './body/post'
import { Contact } from './body/contact'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { routes } from './routes'

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
        <Navigator page = {page}/>
        {(page == 'home') && <Introduction />}
        {(page == 'post') && <Post />}
        {(page == 'contact') && <Contact />}

        <Footer />
    </>
  )
}
