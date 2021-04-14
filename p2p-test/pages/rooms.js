
import Footer from '../components/footer'
import Head from 'next/head'
import Navbar from '../components/navbar'
import Frame from '../components/frame'
import useSWR from 'swr'
import Meetings from '../components/meetings'
     //<div>hello {data[0]}!</div>
     //{components}
     // <div>meeting rooms list + webrtc client</div>
export default function Rooms () {
const fetcher = url => fetch(url).then(r => r.json())

	const { data, error } = useSWR('/api/rooms', fetcher)
	console.log(data)
	var components = []
  for(let i = 0; i<data; i++){
  	components.push(<p> {data[i]}</p>);
  }
  return (
    <Frame>
    {error ? <div>something went wrong</div>: <></>}
    {data ? <Meetings/> : <div className = "h-screen">loading...</div>}
    

      
    </Frame>
  )
}