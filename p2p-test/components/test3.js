import { useCallback,useRef, useEffect,useState } from 'react'
import useSWR from 'swr'
import { Transition } from '@headlessui/react'


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
      <div ref = {ref} className = "flex items-center justify-center z-50">
      <div className = "relative inline-block">
        <input className = "relative truncate border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        placeholder = "Search by course code..." value={search} onChange={change} onClick={() => setIsOpen(!isOpen)}
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
        { suggestions===undefined || suggestions.length == 0 ? <a href = '/course_search_results'><p className="w-full absolute bg-white p-2 hover:bg-red-100 truncate text-left border-2 border-grey rounded-md">Explore all courses</p></a>
 :
          <div className = "bg-white items-left z-50 absolute w-full overflow-hidden truncate border-2 border-grey rounded-md">
          {suggestions.map(i =>(<a href = {`course_search_results?q=${i.coursecode}`}><p className=" hover:bg-red-100 p-2 truncate text-left">{i.coursecode} {i.coursename}</p></a>))}
           <a href = '/course_search_results'><p className="p-2 hover:bg-red-100 truncate text-left">Explore all courses</p></a>
          </div> }
        </Transition>
        </div>
        </div>
    );
}
 
