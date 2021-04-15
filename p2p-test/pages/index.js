import Head from 'next/head'
import { connectToDatabase } from '../util/mongodb'
import Frame from '../components/frame'
import Splash from '../components/splash'
import SplashTitle from '../components/splashSearchbar'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import { TransitionGroup } from 'react-transition-group';
export default function Home({ isConnected }) {
  return (
    <div>
    <Head >
        <title>tofu</title>
      <link rel="icon" href="/favicon.ico" />
      </Head>
      <TransitionGroup
                  classNames="navbar"

          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
    <Navbar/>
            </TransitionGroup>

     

    <Splash/>
    <Footer/>

      
    </div>

  )
}

export async function getServerSideProps(context) {
  const { client } = await connectToDatabase()

  const isConnected = await client.isConnected()

  return {
    props: { isConnected },
  }
}
