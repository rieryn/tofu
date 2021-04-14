event_info = [
    {
        'color': '#fcba03',
        'name': 'csci1020u',
        'type': 'lecture',
        'times': {
            'monday': ['10:00', '10:30', '11:00', '11:30', '12:00'],
            'thursday': ['10:00', '10:30', '11:00', '11:30', '12:00']
        }
    },
    {
        'color': '#2e68c7',
        'name': 'csci1020u',
        'type': 'lab',
        'times': {
            'wednesday': ['11:00', '11:30', '12:00'],
        }
    }
]

new_info = {
    'color': '#abf3c0',
    'name': 'csci9999u',
    'type': 'lecture',
    'times': {
        'monday': ['9:00', '9:30'],
        'friday': ['10:00', '10:30'],
    }
}

window.onload = function () {
    create_table(event_info);
};

function create_table(info) {
    event_info.forEach(obj => {
        for (day in obj.times) {
            let times = obj.times[day];
            let start_time = 'time' + obj.times[day][0].replace(':', '');
            let len = obj.times[day].length;

            let event = document.createElement('div');
            event.setAttribute('class', 'timeblock');
            let p = document.createElement("p");

            p.innerHTML = obj.name + '<br />' + obj.type;
            event.appendChild(p);

            let table_time = document.querySelector(`.${start_time}`)
            let table_day = table_time.querySelector(`.${day}`)
            table_day.classList.add("event")
            table_day.setAttribute('rowspan', len)

            for (let i = 1; i < times.length; i++) {
                let extra_time = 'time' + times[i].replace(':', '');
                let removed_day = document.querySelector(`.${extra_time}`);
                let removed_time = removed_day.querySelector(`.${day}`);
                removed_time.remove();
            }

            event.style.background = obj.color;

            table_day.appendChild(event)
        };
    });
}