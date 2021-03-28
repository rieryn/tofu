import Header from '../components/header'
import Footer from '../components/footer'
import Head from 'next/head'

export default function Frame ({children}) {
  return (
    <>
     	<Head>
        <title>test-proj</title>
      <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
    </>
  )
}