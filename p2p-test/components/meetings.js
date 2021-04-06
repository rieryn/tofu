import MeetingsBar from '../components/meetingsBar'


export default function Meetings(props){
  return (
    <div className="h-screen flex overflow-hidden bg-white">

    <MeetingsBar/>
      
      <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
        
        <div className="flex-1 relative z-0 flex overflow-hidden">
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabIndex={0}>
            <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">

              <img className="object-cover h-full rounded-lg" src="https://images.unsplash.com/photo-1586985564150-11ee04838034?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1430&q=80" alt="" />
            </div>
          </main>


          <aside className="hidden relative xl:flex xl:flex-col flex-shrink-0 w-96 border-l border-gray-200">


            <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
              <img className="object-cover h-full rounded-lg" src="https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1506&q=80" alt="" />
            </div>


          </aside>
        </div>
      </div>
    </div>
  );
}