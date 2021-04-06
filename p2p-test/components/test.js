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
            } catch (err) {
                /* handle the error */
                console.log(err);
            }
        }

        getMedia(constraints);
    }, []);
    var localVideoref = React.createRef();

    return (
        <div>
            peer component
            <video ref={localVideoref} autoPlay ></video>
        </div>);
}

export default Chat;