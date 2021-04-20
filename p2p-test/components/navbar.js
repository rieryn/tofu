import { Transition } from '@headlessui/react'
import { useCallback,useRef, useEffect,useState } from 'react'
import Avatar from '../components/avatar'
import clickAway from '../util/clickaway'
import { signIn, signOut, useSession } from 'next-auth/client'
import Test from '../components/test3'


export default function Component(props){
  const [mobileIsOpen, setMobileIsOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null);
  //profile menu
  const clickListener = useCallback(
    (e) => {
      if (ref.current && !ref.current.contains(event.target))  {
        setIsOpen(false)
        setMobileIsOpen(false)
      }
    },
    [ref.current],
  )
    useEffect(() => {
    // attach the listeners on mount
    document.addEventListener('click', clickListener)
    // detach the listeners on unmount
    return () => {
      document.removeEventListener('click', clickListener)
    }
  }, [])


  return (

    <nav  ref = {ref} className="bg-gray-800">
      <div className=" px-5">
        <div className="relative flex justify-between h-16">
        {/* hamburger */}
        <div className="relative inset-y-0 left-0 pr-6 flex items-center lg:hidden ">
        <button type="button" onClick={() => setMobileIsOpen(!mobileIsOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span className="sr-only">Open main menu</span>

          <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke="white" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        
        </button>
      </div>

          <div className="flex-1 flex items-center justify-start">
            <div className="flex-shrink-0 sm:px-5 flex items-center">
              <a href="/">
              <img className="hidden pr-8 md:block h-12" src="tofu.svg" alt="tofu" />
              </a>
                  
            </div>
            <Test />
            <div className="hidden lg:block lg:ml-6">
              <div className="flex space-x-4">
                <a href="/dashboard" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>
                                
                <a href="/course_search_results" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Courses</a>
    
                <a href="/rooms" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Meetings</a>
    
    
                <a href="/schedulebuilder" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Scheduler</a>
                <a href="/d3graph.html" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Graphs</a>
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            
    
          {/*profile dropdown*/}
            <div className="ml-3 relative">
              <div>
                <button type="button" onClick={() => setIsOpen(!isOpen)}  className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-expanded="false" aria-haspopup="true">
                  <span className="sr-only">Open user menu</span>
                  <Avatar/>    
                </button>
              </div>
    
          <Transition
            show={isOpen}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
              <div className="z-50 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">+ Start New Meeting</a>
                <hr/>
                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">My Profile</a>
                
                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Dashboard</a>
                
                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Friends</a>
                <a href={`/api/auth/signout`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem"
                  onClick={(e) => {
                  e.preventDefault()
                  signOut()
                  }}
                >
                Sign out
                </a>
              </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
      <Transition
            show={mobileIsOpen}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
    <div className="lg:hidden" id="mobile-menu">
    <div className="px-2 pt-2 pb-3 space-y-1">
      <a href="/dashboard" className="text-gray-300 block hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>
                                
                <a href="/course_search_results" className="text-gray-300 block hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Courses</a>
    
                <a href="/rooms" className="text-gray-300 hover:bg-gray-700 block hover:text-white px-3 py-2 rounded-md text-sm font-medium">Meetings</a>
    
    
                <a href="/schedulebuilder" className="text-gray-300 block hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Scheduler</a>
                <a href="/d3graph.html" className="text-gray-300 block hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Graphs</a>
                  </div>
  </div>
      </Transition>

    </nav>
  );
}