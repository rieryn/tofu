import Frame from '../components/frame'
import Dashbar from '../components/dashboardbar'
import dynamic from 'next/dynamic';
import { useCallback,useRef, useEffect,useState } from 'react'
import Calendar from '../components/calendarHeatmap';


export default function DashbBoard () {
return(
<Frame>
    <div className="h-screen flex overflow-hidden bg-gray-50">

    <Dashbar/>
      <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
        
        <div className="flex-1 relative z-0 flex overflow-hidden">
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
            <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
                <div className=" p-12 flex items-center border shadow rounded-lg max-w-xl">
                    <img className=" h-16 w-16 rounded-full sm:block" src="https://images.unsplash.com/photo-1578632749014-ca77efd052eb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="" />
                    <div>
                      <div className="flex items-center">
                        <h1 className="ml-3 text-4xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                          Hello Username :)
                        </h1>
                      </div>

                      

                    </div>

                  </div>



<div className = "mt-5 grid gap-5 grid-cols-6">
<div className="relative max-w-xs   justify-left items-left text-left  bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
            <div className="absolute bg-green-200 rounded-full p-3">
              <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
<path fill="none" d="M3.254,6.572c0.008,0.072,0.048,0.123,0.082,0.187c0.036,0.07,0.06,0.137,0.12,0.187C3.47,6.957,3.47,6.978,3.484,6.988c0.048,0.034,0.108,0.018,0.162,0.035c0.057,0.019,0.1,0.066,0.164,0.066c0.004,0,0.01,0,0.015,0l2.934-0.074c0.317-0.007,0.568-0.271,0.56-0.589C7.311,6.113,7.055,5.865,6.744,5.865c-0.005,0-0.01,0-0.015,0L5.074,5.907c2.146-2.118,5.604-2.634,7.971-1.007c2.775,1.912,3.48,5.726,1.57,8.501c-1.912,2.781-5.729,3.486-8.507,1.572c-0.259-0.18-0.618-0.119-0.799,0.146c-0.18,0.262-0.114,0.621,0.148,0.801c1.254,0.863,2.687,1.279,4.106,1.279c2.313,0,4.591-1.1,6.001-3.146c2.268-3.297,1.432-7.829-1.867-10.101c-2.781-1.913-6.816-1.36-9.351,1.058L4.309,3.567C4.303,3.252,4.036,3.069,3.72,3.007C3.402,3.015,3.151,3.279,3.16,3.597l0.075,2.932C3.234,6.547,3.251,6.556,3.254,6.572z"></path>              </svg>
            </div>
            <p className="ml-16 text-base font-medium text-gray-500  truncate">Streak</p>
          <dd className="ml-16 pb-6 flex  items-baseline sm:pb-7">
            <p className="text-2xl font-semibold text-gray-900">
              12 Days
            </p>
            
            <div className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
              <div className="text-sm">
                <p className="font-sm">footer Details: 1/4, 2/3 github</p>
              </div>
            </div>
          </dd>

        </div>
        <div className = "col-span-3">
              <Calendar />
              </div>
              <div/>


              <div/>
<div className="relative max-w-xs   justify-left items-left text-left  bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
            <div className="absolute bg-green-200 rounded-full p-3">
              <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
<path fill="none" d="M3.254,6.572c0.008,0.072,0.048,0.123,0.082,0.187c0.036,0.07,0.06,0.137,0.12,0.187C3.47,6.957,3.47,6.978,3.484,6.988c0.048,0.034,0.108,0.018,0.162,0.035c0.057,0.019,0.1,0.066,0.164,0.066c0.004,0,0.01,0,0.015,0l2.934-0.074c0.317-0.007,0.568-0.271,0.56-0.589C7.311,6.113,7.055,5.865,6.744,5.865c-0.005,0-0.01,0-0.015,0L5.074,5.907c2.146-2.118,5.604-2.634,7.971-1.007c2.775,1.912,3.48,5.726,1.57,8.501c-1.912,2.781-5.729,3.486-8.507,1.572c-0.259-0.18-0.618-0.119-0.799,0.146c-0.18,0.262-0.114,0.621,0.148,0.801c1.254,0.863,2.687,1.279,4.106,1.279c2.313,0,4.591-1.1,6.001-3.146c2.268-3.297,1.432-7.829-1.867-10.101c-2.781-1.913-6.816-1.36-9.351,1.058L4.309,3.567C4.303,3.252,4.036,3.069,3.72,3.007C3.402,3.015,3.151,3.279,3.16,3.597l0.075,2.932C3.234,6.547,3.251,6.556,3.254,6.572z"></path>              </svg>
            </div>
            <p className="ml-16 text-base font-medium text-gray-500  truncate">Streak</p>
          <dd className="ml-16 pb-6 flex  items-baseline sm:pb-7">
            <p className="text-2xl font-semibold text-gray-900">
              12 Days
            </p>
            
            <div className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
              <div className="text-sm">
                <p className="font-sm">footer Details: 1/4, 2/3 github</p>
              </div>
            </div>
          </dd>

        </div>
        <div className = "col-span-3">
              <Calendar />
              </div>
</div>



            </div>
          </main>


         
        </div>
      </div>
    </div>
</Frame>
)


  
}