import Header from '../components/header'
import Footer from '../components/footer'
import Head from 'next/head'
import styles from './frame.module.css'
import Popdown from '../components/popdown'

export default function Frame ({children}) {
  return (
    <>

     	<Head>
        <title>test-proj</title>
      <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
          <Popdown>
    </Popdown>
      <main>
        {children}
      </main>
      <Footer/>
    </>
  )
}