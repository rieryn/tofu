import Frame from '../components/Frame/frame'
import { useCallback,useRef, useEffect,useState } from 'react'
import useSWR from 'swr'
import Test from '../components/test4'
import CourseTableRow from '../components/courseTableRow'

//query reviews, prereqs from document
//imo it's better to pass in coursecode then start fetching
const props = 
{
    prereqs: {req1:`Restrictions:
Must be enrolled in one of the following Levels:     
      Undergraduate
Must be enrolled in one of the following Colleges:     
      Science
May not be enrolled in one of the following Majors:     
      Computer Science
      Computer Science Co-op
      Computing Science
      Computing Science-Co-op
      Information Technology
      Information Technology Bridge
      Information Technology
Must be enrolled in one of the following Classifications:     
      First year
      Second year
      ** PRERQ: CSCI 1060 - PROGRAMMING WORKSHOPS I [Min Grade: D]
`},  //this might be.. a huge string or might parse it idk. low priority
    coursecode: "CSCI 1040U",
    coursename: "intro to krogg",
    easyrating: "4",
    goodrating: "2",
    numratings: "64",
    CRNS:[{
        crn: "10442",
        type: "lecture",
        days: [{day: "T", day: "F", day: "M"}],
        time: {start: "1540", end:"1700"}, //assume we  converted this while scraping
        instructor: "TBD",
        capacity: "120",
        actual: "104",
        remaining: "16"
    },{
        crn: "10542",
        type: "lab",
        days: [{day: "M", day: "W"}],
        time: {start: "1540", end:"1700"}, //assume we  converted this while scraping
        instructor: "TBD",
        capacity: "20",
        actual: "4",
        remaining: "16"
    }],
    reviews: [{reviewkey: "string", body: "string", user: "anonymous", easyrating: "5", goodrating: "2"}],
    numreviews:"2",
    campus: "OT-Online"
}
 
export default function Component(){
  return (
      <Frame>
      <div className="lg:flex flex-col lg:items-center lg:justify-center h-screen">
    <div className="lg:flex flex-col lg:items-center lg:justify-center max-w-7xl">
      <div className="flex-1 min-w-0 place-self-start ">
        <nav className="flex" aria-label="Breadcrumb">
                <div>
                <a href="/" className="text-sm font-medium text-gray-500 hover:text-gray-700">Courses</a>
              </div>
               <h> > </h> 
              <div>
                <a href="/" className="text-sm font-medium text-gray-500 hover:text-gray-700">CSCI</a>
              </div>
              <h> > </h> 
              <div>
                <a href="/" className="text-sm font-medium text-gray-500 hover:text-gray-700">1040U</a>
              </div>
        </nav>
        <h2 className="mt-2 text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
          CSCI 1040U - Introduction to prog
        </h2>
      </div>
      <div className="flex flex-col ">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 ">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reviews</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Difficulty</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <CourseTableRow/>
                <CourseTableRow/>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    
    
       
    </div>
    </div>
    </Frame>
  );
}