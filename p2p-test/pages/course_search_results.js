import Frame from '../components/Frame/frame'
import CourseTable from '../components/Courses/courseTable'
import { useRouter } from 'next/router'
import useSWR from 'swr'

export default function CourseSearch () {
	const router = useRouter()
  console.log(router.query);
  return (
    <Frame>
      <div className = "flex items-center md:justify-center lg:p-24 ">
      <CourseTable query = {router.query} />
      </div>
    </Frame>
  )
}