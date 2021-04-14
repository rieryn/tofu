import { useCallback,useRef, useEffect,useState } from 'react'
import useSWR from 'swr'
import { Transition } from '@headlessui/react'

//idk there's no good way to just modify child components with animations
//i don't know how to use swr
const fruits = [
    "apple",
    "apricot",
    "banana",
    "blackberry",
    "blueberry",
];

 
export default function Component() {
    const [suggestions, setSuggestions] = useState([]);
    const [search, setSearch] = useState("");
    const fetcher = url => fetch(url).then(r => r.json())
    const { data, error } = useSWR('/api/rooms', fetcher)
    const [text, setText] = useState(" ")

    const [isOpen, setIsOpen] = useState(false)
    const ref = useRef(null);
    const clickListener = useCallback(
    (e) => {
      if (ref.current && !ref.current.contains(event.target))  {
        setIsOpen(false)
      }
    },
    [ref.current],
  )
    useEffect(() => {
    // attach the listeners on component mount.
    document.addEventListener('click', clickListener)
    // detach the listeners on component unmount.
    return () => {
      document.removeEventListener('click', clickListener)
    }
  }, [])

    const change = (evt) => {
        let value = evt.target.value;
        console.log(value)

        setSearch(value);
        fetch('http://localhost:3000/api/search?q='+encodeURIComponent(value))
          .then(r => {if (r.ok) {return r.json()} }).then(data => {if(data) setSuggestions(data)}).then(        console.log(suggestions)
);
        if (value === "1") {
            setSuggestions([]);
        }
        setIsOpen(true);
    };
 
    const submit = () => {
        console.log(`Submit: ${search}`);
        setSearch("");
    };
 
    const click = (suggestion) => {
        console.log(`Accept suggestion: ${suggestion}`);
        setSearch("");
    };

 
    return (
      <div ref = {ref} className = "searchbar relative inline-block rounded-full bg-white " onAnimationEnd={()=>
    setText("Search for courses...")}>
        <input className = "relative w-3/4 h-full bg-transparent     truncate rounded-lg text-sm focus:outline-none"
        placeholder={text}  value={search} onChange={change} onClick={() => setIsOpen(!isOpen)}
        />
        <Transition
            show={isOpen}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
        { suggestions===undefined || suggestions.length == 0 ?  <></> :
          <div className = "bg-white items-left z-50 absolute w-full overflow-hidden truncate border-2 border-black rounded-md">
          {suggestions.map(i =>(<a href = {`course_search_results?q=${i.coursecode}`}><p className="truncate text-left">{i.coursecode} {i.coursename}</p></a>))}
          </div> }
        </Transition>

        <style jsx>{`
        

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
span{
  margin: 0 15px;
  line-height: 4;
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
padding-left:20px;
  animation: bar 3s ease-in-out 0s 1;
  animation-fill-mode: forwards;
}


@keyframes bar {
  0%,30%{ width: 45px; }
  100%{ width: 30vw; value}
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
 
