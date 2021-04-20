import Link from "next/link"
import { Transition } from '@headlessui/react'

//if you want to do js stuff put it in /public and link it like this
//change the localhost links in prod



/*
    <footer >
      <hr/>
      <ul className={styles.navItems}>
        <li className={styles.navItem}>
          <a href="/about.html">About</a>
        </li>
        <li className={styles.navItem}>
          <a href="/send.html">webrtc sendtest </a>
        </li>
        <li className={styles.navItem}>
          <a href="/receive.html">webrtc receivetest</a>
        </li>
      </ul>
    </footer>
    */
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
            <a href="/" className="text-base text-gray-400 hover:text-gray-200">
              About
            </a>
          </div>
    
          <div className="px-5 py-2">
            <a href="/" className="text-base text-gray-400 hover:text-gray-200">
              Team
            </a>
          </div>
    
          <div className="px-5 py-2">
            <a href="https://forms.gle/6BttoowYhx9rS9EV6" className="text-base text-gray-400 hover:text-gray-200">
              Careers
            </a>
          </div>
    
          <div className="px-5 py-2">
            <a href="/" className="text-base text-gray-400 hover:text-gray-200">
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
          


          <a href="/" className="text-gray-400 transform hover:-translate-y-1 hover:scale-110 hover:text-gray-200">
            <span className="sr-only">GitHub</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>


          </a>
    
          <a href="/" className="text-gray-400 hover:text-gray-200">
            <span className="sr-only">Twitter</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
    
          <a href="/" className="text-gray-400 hover:text-gray-200">
            <span className="sr-only">Facebook</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
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

    