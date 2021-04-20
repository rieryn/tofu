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
    <div className = "h-screen flex items-center justify-center bg-gray-800">
    <div className=" p-24 px-40">
      <div className="flex flex-col justify-center items-center max-w-7xl mx-auto py-16 text-left px-4 sm:py-24 sm:px-6">
          <h2 className="text-4xl font-extrabold  text-red-800 sm:text-xl sm:tracking-tight lg:text-6xl">
            {router.query.msg}
          </h2>
          <img className="max-w-2xl p-12" src="https://cdn.pixabay.com/photo/2020/12/25/20/51/bunny-5860131_1280.png"/>

          </div>
          </div>
    </div>
    </Frame>

  )
}