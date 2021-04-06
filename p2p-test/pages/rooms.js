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
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  	console.log(data)
  for(let i = 0; i<data; i++){
  	components.push(<p> {data[i]}</p>);
  }
  return (
    <Frame>
    <Meetings/>

      
    </Frame>
  )
}