import React, { useCallback,useRef, useEffect,useState } from 'react'
import Modal from '../components/addReviewModal'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'

export default function courseTable (props) {
  const [showModal, setShowModal] = useState(false);
  const [ session, loading ] = useSession()

  const viewBox = `0 0 50 50`;
  console.log(props)
  const openModal = () => {
    setShowModal(true);
  }
  const closeModal = () => {
    setShowModal(false);
  }
  return (
    <tr className = "text-left ">
        <Modal showModal = {showModal} closeModal = {closeModal} data= {props.data} userid = {session?.user.id || "none"}/>

      <td className="px-6 py-4 whitespace-nowrap max-w-xs transition duration-500 ease-in-out hover: transform hover:-translate-y-1 hover:scale-101">
        <div className="w-24 md:w-full truncateflex items-center ">
          <div>
            <a href="#" className=" text-sm font-medium text-blue-400 hover:text-yellow-300">
            {props.data?.coursecode}</a>
            <div className="truncate text-sm text-gray-500">
            {props.data?.coursename}</div>
          </div>
        </div>
      </td>
      <td className="hidden md:block block px-6 py-4 whitespace-nowrap lg:w-36 xl:w-full lg:max-w-xs transition duration-500 ease-in-out hover: transform hover:-translate-y-1 hover:scale-101">
        <div className="text-sm text-gray-900">
        {props.data.numratings || 0} Reviews</div>
        <div className="hidden md:block overflow-ellipsis w-8 lg:w-full  overflow-hidden text-sm text-gray-500">
        {props.data.reviews || "n/a"}</div>
        <a href="#" className="text-sm text-blue-400">(expand)</a>
      </td>
      <td className="px-6 py-4 whitespace-nowrap max-w-xs transition duration-500 ease-in-out hover: transform hover:-translate-y-1 hover:scale-101">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-lg bg-blue-100 text-green-800">
        {props.data.numratings || 0}</span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap max-w-xs transition duration-500 ease-in-out hover: transform hover:-translate-y-1 hover:scale-101">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
        {"*".repeat(parseInt(props.data.goodratingtotal)/parseInt(props.data.numratings) || 1)}</span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 transition duration-500 ease-in-out hover: transform hover:-translate-y-1 hover:scale-101">
        {parseInt(props.data.easyratingtotal)/parseInt(props.data.numratings)*100/5 || 0}%
      </td>

      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 transition duration-500 ease-in-out hover: transform hover:-translate-y-1 hover:scale-101">
      {session?
      <button
        onClick = {openModal}
        type="button"
        className=" hidden md:block items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-blue-400 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-200"
      >
        Add Review
      </button>
      :
      <button
        onClick = {(e) => {
                  console.log("tricked you")
                  e.preventDefault()
                  signIn()
                }}
        type="button"
        className=" hidden md:block items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-blue-400 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-200"
      >
        Add Review
      </button>}
      </td>
    </tr>
              
  )
}