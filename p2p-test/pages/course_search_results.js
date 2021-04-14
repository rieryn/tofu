import Frame from '../components/frame'
import CourseTable from '../components/courseTable'
import { useRouter } from 'next/router'

export default function CourseSearch () {
	const router = useRouter()
  console.log(router.query);
  return (
    <Frame>
      <div className = "pt-48 md:p-24 lg:p-36 xl:p-48 ">
      Course search results
      <CourseTable />
      </div>
    </Frame>
  )
}