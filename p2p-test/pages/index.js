import Head from 'next/head'
import { connectToDatabase } from '../util/mongodb'
import Frame from '../components/frame'
import Splash from '../components/splash'
import SplashTitle from '../components/splashSearchbar'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import { TransitionGroup } from 'react-transition-group';
import { CSSTransition } from 'react-transition-group';
import { useCallback,useRef, useEffect,useState } from 'react'
import { Transition } from "@headlessui/react";

export default function Home({ isConnected }) {
    const [nav, setNav] = useState(true);
useEffect(() => {
  const timer = setTimeout(() => {
    setNav(true)
  }, 2000);
  return () => clearTimeout(timer);
}, []);

function setNavfn(){
  setNav(true)
}
  return (

    <div>
    <Head >
        <title>tofu</title>
      <link rel="icon" href="/favicon.ico" />
      </Head>
          
      

      <Transition show={nav}
      enter="transition ease-in duration-800 transform"
        enterFrom="-translate-y-10"
        enterTo="translate-y-0"

      ><Navbar/></Transition>

     

    <Splash setNav = {setNavfn}/>
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
