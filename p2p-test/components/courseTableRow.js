
const props = 
{
 "prereqs": "<p>Restrictions:</p><p>Must be enrolled in one of the following Levels: Undergraduate</p> <p>Must be enrolled in one of the following Colleges: Science</p> <p>May not be enrolled in one of the following Majors: Computer Science</p> <p>Computer Science Co-op</p><p>Computing Science</p><p>Computing Science-Co-op</p><p>Information Technology</p><p>Information Technology Bridge Information Technology</p> <p>Must be enrolled in one of the following Classifications: First year</p> <p>Second year</p><p>** PRERQ: CSCI 1060 - PROGRAMMING WORKSHOPS I [Min Grade: D]</p>",
 "coursecode": "CSCI 1040U",
  "coursename": "Programming Workshop II",
  "easyrating": "4",
 "easyratingtotal": "256",
 "goodrating": "2",
  "goodratingtotal": "128",
  "numratings":"500",
 "CRNS": [ { 
   "crn": "10442",
        "type": "lecture",
        "days": [ "1", "3", "5"],
        "time": {"start": "15:40", "end":"17:00"},
        "instructor": "TBD",
        "capacity": "120",
        "actual": "104",
        "remaining": "16" 
   
 },
 { 
   "crn": "10542",
        "type": "lab",
        "days": [ "2", "4"],
        "time": {"start": "15:40", "end":"17:00"},
        "instructor": "TBD",
        "capacity": "120",
        "actual": "104",
        "remaining": "16" 
 } ],
 "reviews": [{"reviewkey": "string", "body": "Even after six months of release, Genshin Impact does not offer two-factor authentication. Accordingly, the accounts of its massive user-base are not secure at all. Hundreds of players have reported their accounts getting stolen up till now, but the developers haven’t responded to the matter adequately.", "user": "anonymous", "easyrating": "5", "goodrating": "2", "instructor": "mr anderson"},
    {"reviewkey": "string2", "body": "Hilichurls are the most common enemies in Genshin Impact. They resemble the villains from many other popular games, and fans never really knew the actual inspiration behind them./nIn a recent miHoYo Tour 2020 video, the game designers were working on a hilichurl’s motion capture. From the looks of it, it seemed like the hilichurl dance in Genshin Impact is based on real-life dances of certain tribes. It comes as no surprise that people from such indigenous cultures have turned against miHoYo, for attaching their practices to enemies.", "user": "anonymous", "easyrating": "4", "goodrating": "3", "insstructor": "kylo ren"}],
    "numreviews":"2",
    "campus": "OT-Online"
}
 


export default function courseTable () {
  const viewBox = `0 0 50 50`;
  return (
    <tr className = "text-left ">
      <td className="px-6 py-4 whitespace-nowrap max-w-xs transition duration-500 ease-in-out hover: transform hover:-translate-y-1 hover:scale-101">
        <div className="flex items-center ">
          <div>
            <a href="#" className="text-sm font-medium text-blue-400 hover:text-yellow-300">{props.coursecode}</a>
            <div className="text-sm text-gray-500">{props.coursename}</div>
          </div>
        </div>
      </td>
      <td className="block px-6 py-4 whitespace-nowrap lg:w-36 xl:w-full lg:max-w-xs transition duration-500 ease-in-out hover: transform hover:-translate-y-1 hover:scale-101">
        <div className="text-sm text-gray-900">{props.numreviews} Reviews</div>
        <div className="hidden md:block overflow-ellipsis w-8 lg:w-full  overflow-hidden text-sm text-gray-500">{props.reviews[0].body}</div>
        <a href="#" className="text-sm text-blue-400">(expand)</a>
      </td>
      <td className="px-6 py-4 whitespace-nowrap max-w-xs transition duration-500 ease-in-out hover: transform hover:-translate-y-1 hover:scale-101">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-lg bg-blue-100 text-green-800">{props.numratings}</span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap max-w-xs transition duration-500 ease-in-out hover: transform hover:-translate-y-1 hover:scale-101">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">{"*".repeat(props.goodrating)}</span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 transition duration-500 ease-in-out hover: transform hover:-translate-y-1 hover:scale-101">
        {props.easyrating*100/5}%
      </td>
    </tr>
              
  )
}