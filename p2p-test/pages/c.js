import Frame from '../components/frame'
import { useCallback,useRef, useEffect,useState } from 'react'
import useSWR from 'swr'
import Test from '../components/test4'

//i don't know how to use swr
const fruits = [
    "apple",
    "apricot",
    "banana",
    "blackberry",
    "blueberry",
];
 
function Component() {
    const [suggestions, setSuggestions] = useState([]);
    const [search, setSearch] = useState("");
 	const fetcher = url => fetch(url).then(r => r.json())
		const { data, error } = useSWR('/api/rooms', fetcher)

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
    	<div className = "flex items-center justify-center h-screen">
    	<Test/>

        </div>
    );
}
 
export default Component;