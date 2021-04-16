
import Footer from '../components/footer'
import Head from 'next/head'
import Navbar from '../components/navbar'
import Frame from '../components/frame'
import Meetings from '../components/meetings'
import { useRouter } from 'next/router'
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react'

     //<div>hello {data[0]}!</div>
     //{components}
     // <div>meeting rooms list + webrtc client</div>
export default function Rooms () {
const router = useRouter()
  console.log(router.query);
  var id
  useEffect(() => {
    if (localStorage.getItem("peerid") === null) {
  localStorage.setItem("peerid", uuidv4())
  }
  id = localStorage.getItem("peerid");
  console.log(id)
  }, []);
  return (

    <div className = "h-screen">
    <Navbar/>
    <Meetings room={router.query} peerid= {id} />
    </div>

  )
}