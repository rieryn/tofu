
import Footer from '../components/footer'
import Head from 'next/head'
import Navbar from '../components/navbar'
import Frame from '../components/frame'
import { useRouter } from 'next/router'
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react'

import dynamic from 'next/dynamic';
const Meetings = dynamic(() => import('../components/meetings'), {
  ssr: false
});
     //<div>hello {data[0]}!</div>
     //{components}
     // <div>meeting rooms list + webrtc client</div>
export default function Rooms () {
const router = useRouter()
  console.log(router.query);

  return (

    <div className = "h-screen">
    <Navbar/>
    <Meetings room={router.query}  />
    </div>

  )
}