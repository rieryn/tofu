import { useCallback,useRef, useEffect,useState } from 'react'
import Test from '../Splash/splashSearch'

export default function Component(props){
const today = new Date();
const [text, setText] = useState(" ")

return (
      <div >
      <div className="p-4 flex text-6xl justify-center items-center">
  <span>U</span>
  <span>T</span>
  <Test/>

  
  <span>F</span>
  
  <span>U</span>
  
</div>

<style jsx>{`
        

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
span{
  margin: 0 15px;
  line-height: 2;
  text-shadow: 0 0 2px rgba(0, 0, 0, .45);

}


.searchbar{
  margin: 0 15px;

  font-size:20px;
  display: inline-block;
  height: 45px;
  width: 27px;
  border: 4px solid #242730;
  box-shadow:
    0 0 2px rgba(0, 0, 0, .75),
    inset 0 0 2px rgba(0, 0, 0, .45);
  animation: bar 3s ease-in-out 0s 1;
  animation-fill-mode: forwards;
}


@keyframes bar {
  0%,30%{ width: 45px; }
  70%,100%{ width: 30vw; value}
}
@keyframes placeholder {
  0%,30%{ opacity = 0; }
  70%,100%{ opacity = 1; }
}
::placeholder {
transition: opacity 5s;
  animation: placeholder 3s ease-in 0s 1;
  animation-fill-mode: forwards;
}

::-webkit-input-placeholder { transition : opacity 0.5s; }
::-moz-placeholder { transition : opacity 0.5s; }
:-ms-input-placeholder { transition : opacity 0.5s; }
.fade::-webkit-input-placeholder { opacity : 0; }
.fade::-moz-placeholder { opacity : 0; }
.fade:-ms-input-placeholder { opacity : 0; }

textarea:focus, input:focus{
    outline: none;
}

      `}</style>

      </div>
    );
}

function shiftDate(date, numDays) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}