import Frame from '../components/frame'
import Dashbar from '../components/dashboardbar'
import dynamic from 'next/dynamic';
import { useCallback,useRef, useEffect,useState } from 'react'


export default function DashbBoard () {
return(
<Frame>
    <div className="h-screen flex overflow-hidden bg-white">

    <Dashbar/>
      
      <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
        
        <div className="flex-1 relative z-0 flex overflow-hidden">
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
            <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">

              <img className="object-cover w-full rounded-lg" src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80" alt="" />
            </div>
            testaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </main>


         
        </div>
      </div>
    </div>
</Frame>
)


  
}