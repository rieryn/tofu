import Footer from '../components/footer'
import Head from 'next/head'
import Popdown from '../components/popdown'
import Navbar from '../components/navbar'
export default function Frame ({children}) {
  return (
    < >
<div className="items-center justify-center text-center ">
     	<Head >
        <title>test-proj</title>
      <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>

      <main >
            

        {children}
      </main>
      <Footer/>
      </div>
    </>
  )
}