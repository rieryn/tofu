import React, { useCallback,useRef, useEffect,useState } from 'react'
import Peer from 'peerjs';
import ReactDOM from "react-dom";

//props contains list of peers
//for first user props will be empty
const Chat = (props) => {
    var remotePeerIds=[]
    var dataConnections = []
    var mediaConnections = [] 
    var mediaStreams = []
     //unless something goes wrong these are 1:1
    var peer = null; 
    var peerId = null;
    var conn = null;
    var messages = []
    const refs = useRef(mediaConnections.map(() => createRef()));
    var ref1 = React.createRef();
    var ref2 = React.createRef();

  const [items, setItems] = useState([]);

  function addItem (msg) {
    setItems(items => [...items, msg]);
    console.log(items)
  };

      const [streams, setStreams] = useState([]);

  function addStream (stream) {

    setStreams(streams => [...streams, stream]);
    console.log(stream)
  };
    function setSrcObject(ref, stream) {
    if(ref) {
       ref.srcObject = stream;
     }
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
                return stream;
              } catch (err) {
                /* handle the error */
                console.log(err);
            }
            }

                     function initialize() {

                         /*for (const i in props.props)
                             console.log(i);
                             remotePeerIds.push(i);
                         }*/
                         console.log(props.id);
                   remotePeerIds.push(props.id);
                    //new peer
                    peer = new Peer(null, {
                        debug: 2,
                        host: 'localhost',
                        port: 9000,
                        path: 'peerjs/myapp'
                    });
                    //on conn to peerserver

                    peer.on('open', function (id) {
                        if (peer.id === null) {
                            console.log('null id from peer open');
                            peer.id = peerId;
                        } else {
                            peerId = peer.id;
                        }

                        console.log('ID: ' + peer.id);
                        
                        peerId = peer.id;


                    });

                    //on data connection. note there are 2 connections
                    //use this for messages and arbitrary data
                    peer.on('connection', function (c) {
                        remotePeerIds.push(c.peer);
                        dataConnections.push(c);
                            c.on('open', function() {
                                console.log("Connected with peer: "+c.peer);
                                c.on('data',function(data){
                                   messages.push(data);
                                   addItem(data)
                                });
                                c.on('error',function(){
                                  connectionError(c);
                                });

                                c.on('close',function(){
                                  connectionClose(c);
                                });

                                
                            for(var i=0;i<dataConnections.length;i++){
                                console.log(dataConnections[i]);
                                dataConnections[i].send("Connected to: " + c.peer);
                            }
                    });

                        conn = c;
                        console.log("Connected to: " + c.peer);
                        console.log(dataConnections.length)
                        ready();
                    });


                    //on disconnect from signalling server
                    peer.on('disconnected', function () {
                        console.log('Connection lost. Please reconnect');

                        peer.id = peerId;
                        peer._lastServerId = peerId;
                        peer.reconnect();
                    });

                    //on peer destroy
                    // peer.destroy should be called when leaving page
                    peer.on('close', function() {
                        conn = null;
                        console.log('Connection destroyed');
                    });

                    //errors always destroy the peer
                    peer.on('error', function (err) {
                        console.log(err);
                        alert('' + err);
                    });

                    //on remote peer call
                    peer.on('call', function(call) {
                        console.log("called")
                        mediaConnections.push(call)
                          getMedia({video: true, audio: true}, function(stream) {
                            call.answer(stream); 
                            console.log(stream)
                            let streams = 0
                            //will call twice for video/audio thx 2019
                            call.on('stream', function(remoteStream) {
                                console.log("connecting peerstream")
                                streams +=1
                                if(streams==1){
                                     setStreams(streams => [...streams, stream]);

                                }

                                

                            });
                          }, function(err) {
                            console.log('Failed to get local stream' ,err);
                          });
                        });
                        console.log(mediaConnections.length)
                };

                /*docs: 
                data is serialized by BinaryPack by default and sent to the remote peer.
                 You can send any type of data, including objects, strings, and blobs.*/

                function ready() {
                    for (let i in dataConnections){
                        console.log(i)
                    }
                    conn.on('data', function (data) {
                        console.log("Data recieved");
                        switch (data) {
                            case 'test':
                                console.log("tested");
                                break;
                            default:
                                console.log(data);
                                break;
                        };
                    });
                    conn.on('close', function () {
                        conn = null;
                    });
                }

                function join(remotepeer) {
                    if (conn) {
                        conn.close();
                    }

 
                    conn = peer.connect(remotepeer, {
                        reliable: true
                    });

                    conn.on('open', function () {
                        console.log("Connected to: " + conn.peer);

                    });
                        getMedia({video: true, audio: true}, function(stream) {
                          var call = peer.call(conn.peer, stream);
                          console.log(stream)
                          call.on('stream', function(remoteStream) {
                            ref2.current.srcObject = remoteStream;
                          });
                        }, function(err) {
                          console.log('Failed to get local stream' ,err);
                        });

                    conn.on('data', function (data) {
                        addMessage("<span class=\"peerMsg\">Peer:</span> " + data);
                    });
                    conn.on('close', function () {
                    });
                };


                
                        

                initialize();

                join(props.id)



                           // var constraints = {
                            //    video: true,
                            //    audio: true
                           // };
                           /* async function getMedia(constraints) {
                                let stream = null;
                                try {

                                    stream = await navigator.mediaDevices.getUserMedia(constraints);
                                    // console.log(stream.getAudioTracks()[0].getCapabilities()) ;
                                    localVideoref.current.srcObject = stream;
                                    localVideoref.current.muted = false;
                                    ref2.current.srcObject = stream;


                                    navigator.mediaDevices.enumerateDevices()
                    .then(function(devices) {
                      devices.forEach(function(device) {
                        console.log(device.kind + ": " + device.label +
                                    " id = " + device.deviceId);
                      });
                    })
                    .catch(function(err) {
                      console.log(err.name + ": " + err.message);
                    });
                                } catch (err) {
                                    /* handle the error */
                                   // console.log(err);
                              //  }
                          //  }*/

       // getMedia(constraints);
       //push peerid to db at the end
    }, []);

    var comps = []
    for( let i in mediaStreams){
        console.log(i)
        comps.push(<video srcObject={i} autoPlay ></video> )
    }
var ref = React.createRef();



    return (
        <div>
        test2 div
        {streams.map(s => <Video stream={s} />)}
      <Test ref={ref2}/>
        <Test ref={ref2}/>
        <Test ref={ref2}/>
        {items}
               </div>
        )
        
}

const Test = React.forwardRef((props, ref) => (
    <div>
            peer component
            <video ref={ref} autoPlay ></video>
        </div>
));

function Test2({ srcObject}) {

    const refVideo = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (!refVideo.current) return
    refVideo.current.srcObject = srcObject
  }, [srcObject])

    return(
 <div>
            peer component
            <video ref={refVideo} autoPlay ></video>
        </div>
    )
}

const Video = ({ stream }) => {
  const localVideo = React.createRef();

  // localVideo.current is null on first render
  // localVideo.current.srcObject = stream;

  useEffect(() => {
    // Let's update the srcObject only after the ref has been set
    // and then every time the stream prop updates
    if (localVideo.current) localVideo.current.srcObject = stream;
  }, [stream, localVideo]);

  return (
      <div>
    test
      <video style={{ height: 100, width: 100 }} ref={localVideo} autoPlay />
    </div>
  );
};   


export default Chat;