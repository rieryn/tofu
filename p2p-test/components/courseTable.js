import CourseTableRow from '../components/courseTableRow'

import useSWR from 'swr'
import { useRouter } from 'next/router'

export default function courseTable (props) {
    const router = useRouter()

  const fetcher = url => fetch(url).then(r => r.json())
  var url = ""
  console.log(router.query)
  if(router.query) { url = `/api/search?q=${router.query.q}`}
    else{ url = `/api/courses`}
   const { data, error } = useSWR(url, fetcher)
  
  if(data) 
    if(error) console.log(error)
      console.log(url)
  return (
    <div className="flex flex-col ">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 ">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reviews</th>
                  <th scope="col" className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Ratings</th>
                  <th scope="col" className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                  <th scope="col" className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Difficulty</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
              {data ? data.map((it)=> <CourseTableRow data = {it}/>)
                :
              <div>loading...</div>
              }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}