import Head from 'next/head'
import Navbar from '../components/Frame/navbar'
import Frame from '../components/Frame/frame'
import { useRouter } from 'next/router'
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react'

import dynamic from 'next/dynamic';
const Meetings = dynamic(() => import('../components/rooms/meetings'), {
  ssr: false
});
     //<div>hello {data[0]}!</div>
     //{components}
     // <div>meeting rooms list + webrtc client</div>
export default function Rooms () {
const router = useRouter()
  console.log(router.query);

  return (
    <Frame>
    <div className = "h-screen flex items-center justify-center">
    <p>{router.query.msg}  </p>
    </div>
    </Frame>

  )
}