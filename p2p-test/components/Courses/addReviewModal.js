import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'

//api should find course in courses by coursecode and append to reviews array, modify all easyrating, easyratingtotal, goodrating, goodratingtotal
//findOneAndUpdate should be atomic

export default function Example(props) {
  const [open, setOpen] = useState(true)
  const [id, setID] = useState("")
  useEffect(() => {
  }, []);
  console.log(id)
  console.log(props.data)
  const [ session, loading ] = useSession()
  console.log(props.userid)
  return (

    <Transition.Root show={props.showModal} as={Fragment}>
    

      <Dialog 
      as="div" 
      className="fixed z-10 inset-0 overflow-y-auto" 
      open={props.showModal} 
      onClose={props.closeModal}>
        <div className="flex sm:items-end items-center justify-center min-h-screen pt-4 px-4 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          {/* This element is to trick the browser into centering the modal contents. */}

          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
              <div>
                
                <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => props.closeModal()}
                >
                  <span className="sr-only">Close</span>
                  <svg className="h-6 w-6" viewBox="0 0 20 20">
              <path fill="black" d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
            </svg>
                </button>
              </div>


                <div className="mt-3 text-center sm:mt-5">
                  <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                    Leave a review for {props.data.coursecode || ""}
                  </Dialog.Title>



           <div className="p-6">       
          <form className="space-y-6 text-left" action="api/newreview" method="POST">
            
            <input className="hidden" type="text" name="userid" id="userid" value={props.userid} readOnly/>
            <input className="hidden" type="text" name="coursecode" id="coursecode" value={props.data.coursecode} readOnly/>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                How was this course?
              </label>
              <div className="mt-1">
                <textarea
                  id="reviewbody"
                  name="reviewbody"
                  type="text"
                  autoComplete="Default"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
            <p className="block text-sm font-medium text-gray-700">
                Good?
              </p>
              <div className="flex items-center ratingcontainer text-red-400 text-2xl">
             
                <input className="notstar" id="goodratingstar5" type="radio" name="goodrating" value="5"/>
                <label htmlFor="goodratingstar5"/>
                <input className="notstar" id="goodratingstar4" type="radio" name="goodrating" value="4"/>
                <label htmlFor="goodratingstar4"/>
                <input className="notstar" id="goodratingstar3" type="radio" name="goodrating" value="3"/>
                <label htmlFor="goodratingstar3"/>
                <input className="notstar" id="goodratingstar2" type="radio" name="goodrating" value="2"/>
                <label htmlFor="goodratingstar2"/>
                <input className="notstar" id="goodratingstar1" type="radio" name="goodrating" value="1"/>
                <label htmlFor="goodratingstar1"/>

              </div>

            </div>
            <div className="flex items-center justify-between">
            <p className="block text-sm font-medium text-gray-700">
                Easy?
              </p>
              <div className="flex items-center ratingcontainer text-blue-400 text-2xl">
             
                <input className="notstar" id="easyratingstar5" type="radio" name="easyrating" value="5"/>
                <label htmlFor="easyratingstar5"/>
                <input className="notstar" id="easyratingstar4" type="radio" name="easyrating" value="4"/>
                <label htmlFor="easyratingstar4"/>
                <input className="notstar" id="easyratingstar3" type="radio" name="easyrating" value="3"/>
                <label htmlFor="easyratingstar3"/>
                <input className="notstar" id="easyratingstar2" type="radio" name="easyrating" value="2"/>
                <label htmlFor="easyratingstar2"/>
                <input className="notstar" id="easyratingstar1" type="radio" name="easyrating" value="1"/>
                <label htmlFor="easyratingstar1"/>

              </div>

            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add Review
              </button>
            </div>
          </form>
          
                </div>

                </div>

              </div>
              
            </div>

          </Transition.Child>
{/*cool isn't it*/}
<style jsx>{`
  .ratingcontainer{
    direction:rtl;
  }  
    .ratingcontainer>input+label:before{
      content:'☆';
    }
    .ratingcontainer>input:checked~label:before{
      content:'★';
    }
    .ratingcontainer>input:checked+label:before{
      content:'★';
    }
    .notstar{
      opacity: 0;
      width: 0;
      height: 0;
    }
      `}</style>

        </div>

      </Dialog>
      
    </Transition.Root>

  )
}