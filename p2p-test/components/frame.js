import Footer from '../components/footer'
import Head from 'next/head'
import Navbar from '../components/navbar'
export default function Frame ({children}) {
  return (
    < >
<div className="items-center justify-center text-center ">
     	<Head >
        <title>tofu</title>
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