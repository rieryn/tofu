import Frame from '../components/frame'
import CourseTable from '../components/courseTable'
import { useRouter } from 'next/router'

export default function CourseSearch () {
	const router = useRouter()
  console.log(router.query);
  return (
    <Frame>
      <div className = "pt-48 md:p-36 lg:p-48 lg:pr-64 lg:pl-64">
      Course search results
      <CourseTable />
      </div>
    </Frame>
  )
}