import useSWR from 'swr'
import RoomButton from '../components/roomjoinButton'


export default function MeetingsBar(props){
  const fetcher = url => fetch(url).then(r => r.json())
  const { data, error } = useSWR('/api/rooms', fetcher)
  //create room pops out a modal
  //join/search input has a autocomplete and input on enter
  //if you create a room that already exists you join it
  if (data) data.map((it) => {console.log(it)});

  return (
    <div className=" flex flex-shrink-0">
        <div className="flex flex-col">
          <div className="flex flex-col h-0 flex-1 border-r border-gray-200 bg-blue-50 pl-2">
            <div className="flex-1 flex flex-col overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
              </div>
              <a href="/" className="pt-4 text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                    
                    <svg className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Back to Dashboard
                  </a>
                    <p className = "text-xs pt-2 pl-2">Direct connection</p>
              <div className="pl-2 pt-2 text-gray-600" >

                  <input className="text-sm bg-white bg-opacity-80 h-10 px-5 pr-8 rounded-lg text-sm focus:outline-none" 
                  type="text" name="peerid" placeholder="Enter id..." id="peerid" />
                  <button type="submit"  className="hidden absolute right-0 top-0 mt-5 mr-4"></button>
                  <hr/>
                </div>  
              <nav className="mt-5 flex-1" aria-label="Sidebar">
                <div className="px-2 space-y-3">
                  <button onClick = {props.openModal} className="h-24 w-56 border-2 border-dashed border-gray-200 hover:bg-white hover:text-gray-800 justify-center text-gray-400 group flex items-center py-2 text-xl font-medium rounded-md focus:outline-none">
                    +
                    <br/>
                    New Room
                  </button>
                  {error ? <p>Something went wrong</p> : <></>}
                  {data ? data.map((it) => <RoomButton key = {it.roomid} roomid = {it.roomid} roomname = {it.roomname} description = {it.roomdesc} peerlist = {it.peerid}/>)
                  :
                  <div>Loading...</div>
                  }
    
                 
    
                 
    
                  
                </div>
              </nav>
            </div>



          </div>
        </div>
      </div>
  );
}