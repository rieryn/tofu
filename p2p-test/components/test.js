import React, { useEffect } from 'react';

const Chat = (props) => {
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
                console.log(err);
            }
        }

        getMedia(constraints);
    }, []);
    var localVideoref = React.createRef();
    var ref2 = React.createRef();



    return (
        <div>
        <Test ref={localVideoref}/>
        <Test ref={ref2}/>
        <Test ref={localVideoref}/>
        </div>
        )
        
}

const Test = React.forwardRef((props, ref) => (
    <div>
            peer component
            <video ref={ref} autoPlay ></video>
        </div>
));

export default Chat;