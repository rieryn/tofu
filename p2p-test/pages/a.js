import Frame from '../components/frame'
import Splash from '../components/splash'
import dynamic from 'next/dynamic';
import { useCallback,useRef, useEffect,useState } from 'react'

const Test = dynamic(() => import('../components/test2'), {
  ssr: false
});
export default function A () {

	const [title, setTitle] = useState('')
  return (
  	<div>
  	<input onChange={event => setTitle(event.target.value)} type="text" id="receiver-id" title="Input the ID from receive.html"/>
      {title &&<> <Test id= {title}/>	</>}
      </div>
  )
}