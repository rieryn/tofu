userschedule = [
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

newblock = {
    'color': '#abf3c0',
    'name': 'csci9999u',
    'type': 'lecture',
    'times': {
        'monday': ['9:00', '9:30'],
        'friday': ['10:00', '10:30'],
    }
}

window.onload = function () {
    add_timeblock(userschedule, newblock)
    create_table(userschedule);
};

function add_timeblock(cur_schedule, newblock) {
    let valid = true;
    for (newday in newblock.times) {
        for (oldblock of cur_schedule) {
            for (oldday in oldblock.times) {
                if (newday === oldday) {
                    // check times if days are the same
                    for (time of oldblock.times[oldday]) {
                        if (newblock.times[newday].includes(time)) {
                            alert('Course does not fit')
                            valid = false
                            break;
                        }
                    }
                }
            }
        }
    }
    if (valid){
        cur_schedule.push(newblock)
    }
}

function create_table(schedule) {
    console.log(schedule)
    schedule.forEach(obj => {
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