
export default function Component(props){
const today = new Date();

return (
      <div >
      <div className="p-4 flex text-6xl justify-center items-center">
  <span>U</span>
  <span>T</span>
  <input id = "search" autocomplete="off" className ="border rounded-full pb-2 searchbar" /> 
  
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
  line-height: .7;
  text-shadow: 0 0 2px rgba(0, 0, 0, .45);

}


.searchbar{
  margin: 0 15px;
  font-size:20px;
  display: inline-block;
  height: 45px;
  width: 27px;
  border: 2.5px solid black;
  box-shadow:
    0 0 2px rgba(0, 0, 0, .75),
    inset 0 0 2px rgba(0, 0, 0, .45);
padding-left:20px;
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