import MeetingsBar from '../components/meetingsBar'
import ChatPanel from '../components/chatPanel'
import React, { useEffect, useState } from 'react';
import Modal from '../components/addcourseModal'

const messages = ["Have you gone to the doctors?", "As an incoming first year, I really appreciate this.", "This is an amazing initiative!", "Example: asking for dealers, asking for copyrighted material."]

export default function Meetings(props){
  var ref = React.createRef();
  const [toggleCam,setToggleCam] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [messageData,setMessageData] = useState([]);
  const openModal = () => {
    setShowModal(true);
  }
  const closeModal = () => {
    setShowModal(false);
  }
      useEffect(() => {
        var constraints = {
            video: true,
            audio: true
        };
        async function getMedia(constraints) {
            let stream = null;
            try {                
                stream = await navigator.mediaDevices.getUserMedia(constraints);
                // console.log(stream.getAudioTracks()[0].getCapabilities()) ;
                ref.current.srcObject = stream;
                 } catch (err) {
                console.log(err);
            }
        }
        if(toggleCam) getMedia(constraints);

    }, [toggleCam]);
  return (
    <div className="h-screen flex overflow-auto bg-white">
    <Modal showModal = {showModal} closeModal = {closeModal}/>
    <MeetingsBar openModal = {openModal}/>
      
      <div className="flex flex-col flex-1 overflow-hidden">
        
        <div className="flex-1 relative z-0 flex overflow-hidden">
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
            <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8 ">
            <div className = "flex flex-col items-center justify-center border-2 border-gray-200 h-full items-center border-dashed rounded-lg">
              <p className = "text-blue-500 text-sm">You aren't in any meetings, join a meeting or just relax here by yourself 😊
              </p>
              {  toggleCam ? <video className="h-3/4 p-12 rounded-lg" ref={ref} autoPlay ></video> :
              
              <img className="px-12 py-6 object-cover h-3/4 rounded-xl" src="https://cdn.pixabay.com/photo/2015/12/06/21/25/balloons-1080067_1280.png" alt="" />
                
              
              }
              <button onClick = {() => setToggleCam(!toggleCam)}
                type="button"
                className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none"
              >
                Test webcam
              </button>
              
              
            </div>
            </div>
          </main>


          
        </div>
      </div>
      <ChatPanel/>

      
    </div>
  );
}