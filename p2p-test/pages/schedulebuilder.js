import Frame from '../components/frame'
import ScheduleTable from '../components/scheduleTable'


export default function Schedule () {
  return (
    <Frame>
      <link rel="stylesheet" href="schedule.css"></link>
      <script src="schedule.js"></script>
      <ScheduleTable />
    </Frame>
  )
}