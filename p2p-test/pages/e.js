import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

export default function Component(props){
const today = new Date();

return(
	<div className = "max-w-2xl">
<CalendarHeatmap
  startDate={shiftDate(today, -365)}
  endDate={today}
  values={[
    { date: '2016-01-01' },
    { date: '2016-01-22' },
    { date: '2016-01-30' },
  ]}
/>
</div>
	)
}

function shiftDate(date, numDays) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}