import MeetingsBar from '../components/meetingsBar'
import ChatPanel from '../components/chatPanel'
import React, { useCallback,useRef, useEffect,useState } from 'react'
import Modal from '../components/addRoomModal'
import Peer from 'peerjs';
import ReactDOM from "react-dom";


export default function Meetings(props){
  var ref = React.createRef();

  const [toggleCam,setToggleCam] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [messageData,setMessageData] = useState([]);
  const [items, setItems] = useState([]);
  const [streams, setStreams] = useState([]);
  //peers to connect to
  const [remotePeerIds, setRemotePeerIds] = useState([]);
  //peers to reconnect to (hopeful)
  var connectedPeers = [];
  //connections
  const [dataConnections, setDataConnections] = useState([]);

  var mediaConnections = [] 
  var mediaStreams = []
   //unless something goes wrong these are 1:1
  var peer = null; 
  const [peerstate,setPeer] = useState();

  var peerId = null;
  var conn = null;
  var messages = []
  const refs = useRef(mediaConnections.map(() => createRef()));
  var ref1 = React.createRef();
  var ref2 = React.createRef();
  var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
  var testStreamRef = React.createRef();
  //wrapper fns
  const openModal = () => {
    setShowModal(true);
  }
  const closeModal = () => {
    setShowModal(false);
  }
  const setPeers = (peerList) => {
    setRemotePeerIds(peerList);
  }
  //messages from datachannel
  function addMessage (msg) {
    setMessageData(messageData => [...messageData, msg]);
    console.log(msg)
  };
  function sendMessage (msg){
    addMessage(msg)
    console.log(dataConnections)
    for (let i in dataConnections){
      dataConnections[i].send(msg)
    }

  }
  //incoming media streams
  function addStream (stream) {

    setStreams(streams => [...streams, stream]);
    console.log(stream)
  };
  //display streams
  function setSrcObject(ref, stream) {
    if(ref) {
       ref.srcObject = stream;
     }
  }
  //toggle test cam
  useEffect(() => {
    async function getMedia() {
        let stream = null;
        try {                
            stream = await navigator.mediaDevices.getUserMedia({video: true,audio: true});
            // console.log(stream.getAudioTracks()[0].getCapabilities()) ;
            testStreamRef.current.srcObject = stream;
             } catch (err) {
            console.log(err);
        }
    }
    if(toggleCam) getMedia();

  }, [toggleCam]);


  //initialize peer
  useEffect(() => {
    console.log(props.peerlist)
    console.log(remotePeerIds)
    
    console.log(props.room.roomid)
    console.log("Remote peers:")
    console.log(remotePeerIds)
    let idlocalStorage;
    if (localStorage.getItem("peerid") === null) {
      localStorage.setItem("peerid", uuidv4())
      console.log("localstorage changed")
    }
    idlocalStorage = localStorage.getItem("peerid");
    console.log(idlocalStorage)
    function initialize() {
                         /*for (const i in props.props)
                             console.log(i);
                             remotePeerIds.push(i);
                         }*/
                   console.log("Initializing peer")
                    //new peer
                    peer = new Peer( {
                        debug: 2,
                        host: 'localhost',
                        port: 9000,
                        path: 'peerjs/myapp'
                    });

                    //on conn to peerserver

                    peer.on('open', function (id) {
                        if (peer.id === null) {
                            console.log('null id from peer open');
                        } else {
                            fetch(`http://localhost:3000/api/join?peerid=${peer.id}&roomid=${props.room.roomid}`)
                            peerId = peer.id;
                        }
                        setPeer(peerstate);

                        peerId = peer.id;

                        console.log('check if these ids are the same\n' + peer.id+'\n'+ idlocalStorage+'\n'+ peerId+'\n');
                        if(remotePeerIds.length>0){
                            join(remotePeerIds);
                        }
                    });
                    //set up listener fns for incoming conns
                    //on data connection. note there are 2 connections
                    //use this for messages and arbitrary data
                    /*listen for incoming data
                    docs: 
                    data is serialized by BinaryPack by default and sent to the remote peer.
                    You can send any type of data, including objects, strings, and blobs.*/
                    peer.on('connection', function (c) {
                        connectedPeers.push(c.peer);
                            c.on('open', function() {
                                console.log("Connected with peer: "+c.peer);
                                setDataConnections(dataConnections => [...dataConnections, c]);
                                c.on('data',function(data){

                                   addMessage(data)
                                });
                                c.on('error',function(){
                                  console.log("Connection error");
                                });

                                c.on('close',function(){
                                  /*let idx = 0;
                                  while (idx < dataConnections.length) {
                                    if (dataConnections[idx] === c) {
                                      dataConnections.splice(idx, 1);
                                    } else {
                                      i++;
                                    }
                                  }*/
                                });

                            
                            for(var i=0;i<dataConnections.length;i++){
                                console.log(dataConnections[i]);
                                dataConnections[i].send("Connected to: " + c.peer);
                            }
                    });
                        conn = c;
                        console.log("Connected to: " + c.peer);
                        
                    });

                    //incoming media conn
                    peer.on('call', function(call) {
                        console.log("Incoming media stream")
                        mediaConnections.push(call)
                          getUserMedia({video: true, audio: true}, function(stream) {
                            
                            console.log(stream);
                            let incoming = 0
                            //will call twice for video/audio but both have video/audio thx 2019
                            call.on('stream', function(remoteStream) {
                                console.log("Connecting incoming media stream")
                                incoming +=1
                                if(incoming==1){
                                     setStreams(streams => [...streams, remoteStream]);
                                }

                            });
                            call.answer(stream); 
                          }, function(err) {
                            console.log('getUserMedia error' ,err);
                          });
                        });

                    //on disconnect from signalling server
                    peer.on('disconnected', function () {
                        peer.reconnect();
                    });

                    //on peer destroy
                    //peer.destroy should be called when leaving room
                    peer.on('close', function() {
                        setDataConnections(dataConnections => [...dataConnections, []]);
                        mediaConnections= [];
                        fetch(`http://localhost:3000/api/leave?peerid=${peer.id}&roomid=${props.room.roomid}`)
                        console.log('peer destroyed');
                    });

                    //errors always destroy the peer
                    peer.on('error', function (err) {
                        console.log(err);
                    });
                    console.log(mediaConnections.length)

                };


                


                //joining call
                function join(remotePeerIds) {
                  console.log("run join")
                  console.log(remotePeerIds)
                    mediaConnections = [];
                    for (let i in remotePeerIds){
                      let dataconn = peer.connect(remotePeerIds[i], {reliable: true});
                      dataconn.on('open', function () {
                        dataconn.on('data', function (data) {
                          addMessage(data);
                      });
                      });
                      setDataConnections(dataConnections => [...dataConnections, dataconn]);
                      getUserMedia({video: true, audio: true}, function(stream) {
                        let mediaconn = peer.call(remotePeerIds[i], stream);
                        mediaConnections.push(mediaconn)
                        let incoming = 0
                        mediaconn.on('stream', function(remoteStream) {
                          //will call twice for video/audio but both have video/audio thx 2019
                          console.log("Connecting called media streams")
                          incoming +=1
                          if(incoming==1){
                               setStreams(streams => [...streams, remoteStream]);
                          }
                        })
                        });
                     
                    }
                };
                if(typeof props.peerlist !== 'undefined' && remotePeerIds.length ==0){
      console.log("parse peerlist")
      setRemotePeerIds(JSON.parse(props.peerlist))
      console.log(remotePeerIds)
    }
                if(props.room.roomid && typeof props.peerlist == 'undefined'){
                    initialize()
                    
                }
                if(props.room.roomid && remotePeerIds.length >0){
                  initialize()
                }
                
    }, [remotePeerIds, props.room.roomid]);
const beforeUnload = (event) => {
    const e = event || window.event;
    e.preventDefault();
    e.returnValue = 'YOUR CONNECTIONS WILL BE DESTROYED DO NOT HOT RELOAD THIS';
    fetch(`http://localhost:3000/api/leave?peerid=${peer?.id}&roomid=${props.room?.roomid}`)
   alert("HEY");
    peer?.destroy();
    console.log("unloadevent")
    return null;
    
};
useEffect(() => {
    if(peerstate)window.addEventListener('beforeunload',beforeUnload );
    return () => window.removeEventListener('beforeunload', beforeUnload);
    
  }, [peerstate]);

    var comps = []
    //for( let i in mediaStreams){
        //console.log(i)
        //comps.push(<video srcObject={i} autoPlay ></video>)}






  return (
    <div className="h-full flex overflow-auto bg-white">
    <Modal showModal = {showModal} closeModal = {closeModal}/>
    {props.room.roomid ?  <></> :<MeetingsBar openModal = {openModal}/> }
      
      <div className="flex flex-col flex-1 overflow-hidden">
        
        <div className="flex-1 relative z-0 flex overflow-hidden">
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
            <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8 ">
            <div className = "flex flex-col items-center justify-center border-2 border-gray-200 h-full items-center border-dashed rounded-lg">
              
              {Object.keys(props.room).length === 0 ?
               
                <>
                <p className = "text-blue-500 text-sm">You aren't in any meetings, join a meeting or just relax here by yourself 😊
              </p>
              {  toggleCam ? <video className="h-3/4 p-12 rounded-lg" ref={testStreamRef} autoPlay ></video> :
              
              <img className="px-12 py-6 object-cover h-3/4 rounded-xl" src="https://cdn.pixabay.com/photo/2015/12/06/21/25/balloons-1080067_1280.png" alt="" />
                
              
              }
              <button onClick = {() => setToggleCam(!toggleCam)}
                type="button"
                className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none"
              >
                Test webcam
              </button>
              </>
              :
              <div className = "grid  grid-cols-4 grid-rows-4 grid-flow-col h-full w-full place-content-stretch    ">
              {  toggleCam ? <video className="h-full w-full" ref={testStreamRef} autoPlay ></video> :
              <button onClick = {() => setToggleCam(!toggleCam)}
                type="button"
                className="inline-flex items-center px-2.5 py-1.5 w-20 border border-transparent text-xs font-medium rounded text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none"
              >Enable webcam</button>}

              {streams.map(s => <Video stream={s} />)}
              </div>
              }
              
            </div>
            </div>
          </main>


          
        </div>
      </div>
      <ChatPanel messages= {messageData} setPeers = {setPeers} sendMessage = {sendMessage}/>

      
    </div>
  );
}

const Video = ({ stream }) => {
  const ref = React.createRef();

  // ref.current is null on first render
  useEffect(() => {
    //update when ref gets a value
    if (ref.current) ref.current.srcObject = stream;
  }, [stream, ref]);

  return (
      <div>
      <video className="w-full h-full" ref={ref} autoPlay />
    </div>
  );
};   