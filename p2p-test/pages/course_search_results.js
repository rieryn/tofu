import Frame from '../components/frame'
import CourseTable from '../components/courseTable'

export default function CourseSearch () {
  return (
    <Frame>
      <div className = "pt-48 md:p-36 lg:p-48 lg:pr-64 lg:pl-64">
      Course search results
      <CourseTable />
      </div>
    </Frame>
  )
}