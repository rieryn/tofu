import MeetingsBar from '../components/meetingsBar'
import ChatPanel from '../components/chatPanel'


export default function Meetings(props){
  return (
    <div className="h-screen flex overflow-auto bg-white">

    <MeetingsBar/>
      
      <div className="flex flex-col flex-1 overflow-hidden">
        
        <div className="flex-1 relative z-0 flex overflow-hidden">
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
            <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">

              <img className="object-cover h-full rounded-lg" src="https://images.unsplash.com/photo-1586985564150-11ee04838034?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1430&q=80" alt="" />
            </div>
          </main>


          
        </div>
      </div>
      <ChatPanel/>

      
    </div>
  );
}