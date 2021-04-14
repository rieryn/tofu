event_info = [
    {
        'color': '#fcba03',
        'name': 'csci1020u',
        'type': 'lecture',
        'time' : [
            {'monday' : ['10:00', '10:30', '11:00', '11:30', '12:00']},
            {'thursday' : ['10:00', '10:30', '11:00', '11:30', '12:00']}
        ]
    },
    {
        'color': '#2e68c7',
        'name': 'csci1020u',
        'type': 'lab',
        'time' : [
            {'wednesday' : ['11:00', '11:30', '12:00']}
        ]
    },
    {
        'color': '#2e68c7',
        'name': 'csci1030u',
        'type': 'lab',
        'time' : [
            {'wednesday' : ['11:30', '11:30', '12:30']}
        ]
    },

]

window.onload = function() {
    create_event(event_info);
};

function create_event(info) {
    event_info.forEach(obj => {
        obj.time.forEach(periods => {
            let day = Object.keys(periods)[0];
            let start_time = 'time' + Object.values(periods)[0][0].replace(':', '');
            let len = Object.values(periods)[0].length;
            let times = Object.values(periods)[0];

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

        });
    });

}