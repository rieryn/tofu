import Link from "next/link"
import { Transition } from '@headlessui/react'

//if you want to do js stuff put it in /public and link it like this
//change the localhost links in prod

export default function Footer() {
  return (
<footer className="bg-gray-800 justify-center overflow-hidden z-50 ">
<div className="md:pl-24 pt-8 mx-5 my-2 flex flex-wrap justify-center ">

              <img className="object-fill w-24 rounded-lg" src="/tofu.svg" alt="" />
          <div className="px-8 py-2">
            <p className="max-w-xl text-left text-lg text-gray-600">
              Leading developer of the world's topics that are highly represented in the data (Brexit, Miley Cyrus, Lord of the Rings, and so on)
            </p>
          </div>
          <hr/>

 </div>
      <div className="max-w-7xl flex flex-row justify-center mx-auto px-4 overflow-hidden">
      <hr/>
        <div className="pt-4 mx-5 my-2 flex flex-wrap justify-center">
    
          <div className="px-5 py-2">
            <a href="https://forms.gle/6BttoowYhx9rS9EV6" className="text-base text-gray-400 hover:text-gray-200">
              Careers
            </a>
          </div>
    
          <div className="px-5 py-2">
            <a href="/apidocs" className="text-base text-gray-400 hover:text-gray-200">
              API
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="https://ontariotechu.ca/mycampus/" className="text-base text-gray-400 hover:text-gray-200">
              myCampus
            </a>
          </div>
    
        </div>
        <div className="mt-8 flex justify-center space-x-6">
          


          <a href="https://github.com/rieryn" className="text-gray-400 transform hover:-translate-y-1 hover:scale-110 hover:text-gray-200">
            <span className="sr-only">GitHub</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>


          </a>
    
          


        </div>
        
      </div>
      <p className="pb-4 mt-8 text-center text-xs text-gray-500">
          &copy; 2021 NOTU ALL RIGHTS RESERVED
        </p>
    </footer>
  )
}

    