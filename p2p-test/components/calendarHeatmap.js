import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

export default function Component(props){
const today = new Date();

return(
	<div>
<CalendarHeatmap
  startDate={shiftDate(today, -365)}
  endDate={today}
  values={[
    { date: '2021-01-01', count: 1  },
    { date: '2021-01-22', count: 4 },
    { date: '2021-01-30', count: 2 },
  ]}
    classForValue={(value) => {
    if (!value) {
      return 'color-empty';
    }
    return `fill-current text-${props.color}-${Math.min(value.count*100,800)}`;
  }}
/>


</div>
	)
}

function shiftDate(date, numDays) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}