import { Inter } from 'next/font/google'
import { Navigator } from '../components/navigator'
import { Footer } from '../components/footer'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import Head from 'next/head'
import routes from '../components/routes'

const inter = Inter({ subsets: ['latin'] })

const validPage = ['home','project' ,'post', 'contact']

export default function Home() {
  const router = useRouter()
  let { page } = router.query
  if (page == null || validPage.findIndex(p => p == page) == -1) {
    page = 'home'
  }
  let title = 'Blog -' + page
  const DynamicArticle = dynamic(() => import("../components/body/" + page))

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navigator page={page} />
      <DynamicArticle data={router.query} />
      <Footer />
    </>
  )
}
