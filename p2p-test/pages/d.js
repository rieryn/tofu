import Head from 'next/head'
import dynamic from 'next/dynamic';

import { connectToDatabase } from '../util/mongodb'
import Frame from '../components/frame'
import Splash from '../components/splash'
import SplashTitle from '../components/splashSearchbar'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
const Test = dynamic(() => import('../components/test2'), {
  ssr: false
});
export default function Home({ isConnected }) {
  return (

    <Test/>
 

  )
}

export async function getServerSideProps(context) {
  const { client } = await connectToDatabase()

  const isConnected = await client.isConnected()

  return {
    props: { isConnected },
  }
}
