import Frame from '../components/Frame/frame'
import ScheduleTable from '../components/scheduleTable'


export default function Schedule () {
  return (
    <Frame>
      <link rel="stylesheet" href="schedule.css"></link>
      <script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script> 
      <script src="scripts/schedule.js"></script>

      <ScheduleTable />
    </Frame>
  )
}