import { signIn, signOut, useSession } from 'next-auth/client'
import Search from '../Splash/splashSearchbar'


export default function Component(props){
    const [ session, loading ] = useSession()

  return (
    <div className="lg:relative lg:flex-none bg-white h-screen overflow-hidden ">
      <div className="lg:max-w-7xl mx-auto xl:max-w-full ">
        <div className="relative z-10 pb-48 bg-white  md:w-3/5">
          <svg className="hidden lg:block absolute -right-40 w-80  h-screen text-white transform translate-x-3/5" 
          fill="currentColor" viewBox="0 0 100 100" 
          preserveAspectRatio="none" aria-hidden="true">
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mx-auto max-w-7xl flex-col h-screen lg:pr-16 sm:px-8 lg:px-0 z-0 2xl:pt-48 2xl:pb-80 2xl:pl-36 flex justify-center  ">
              <h1 className="text-6xl tracking-tight text-blue-400 self-center   ">
                <Search/>
              </h1>
               <div className="md:pl-4 xl:pl-20  text-center lg:text-left ">

              <p className="mt-3 pb-2 text-sm text-gray-500 md:mt-5 md:text-lg md:max-w-xl md:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Search courses · Take courses · Rate courses · Fail courses 
              </p>

              <div className="mt-5  md:flex md:justify-center  lg:justify-start">
                <div onClick = {props.setNav} 
                className="rounded-md shadow ">
                  <p className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-400 hover:bg-blue-600">
                    Explore
                  </p>
                </div>
              <div className="mt-3 sm:mt-0 sm:ml-3 ">
  
                {session ? 
                <a href={"/dashboard"} className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-blue-200 ">
                    Welcome {session.user.name|| session.user.email }
                  </a> :
                <a onClick={(e) => {
                  e.preventDefault()
                  signIn()
                   }} href={`/api/auth/signin`} 
                   className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-blue-200 ">
                    Sign up
                  </a>}

                  
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="absolute inset-y-0 top-0 -right-10  xl:w-4/6 w-5/6  pr-8 hidden lg:block">
        <img className="object-cover h-full" src="https://i.imgur.com/Z8LRcsn.png" alt="" />
      </div>
    </div>
  );
}