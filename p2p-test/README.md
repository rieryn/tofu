req:
```
have mongodb 4.4 installed

db uri: localhost:27017

db name: local
```

collections:
```
courses

	proposed schema:

		coursecode

		coursename

		num ratings

		score1

		percentage1
		
		score2

		percentage2

```
```
ratings

	schema:

		coursecode

		username?

		review?

		score1

		score2

```

import json to test

using mock data for now

scrape from https://ssbp.mycampus.ca/prod_uoit/

(low prio)

check eg.html for what data we would be able to have


env.local is set to default mongodb configs, change it if yours is diff

```
run:

cd p2p-test

npm i

npm run dev

wait ~ 10s, the jit compiler for tailwind is kinda buggy so just load the whole thing for now

http://localhost:3000/
```

testing webrtc: open http://localhost:9000/ twice


server.js is for reqs

will default to bultin routing otherwise(dev env only)
```
structure:
/public: static files
/pages: react components that have routes
/components: like actual react components
/pages/api: db query stuff here
server.js: express server
/utils: middleware & fn exports
```
BIG TODO:

login/session management, profile dashboard, friends


rating page

loads course codes, names from course table

loads ratings, reviews from rating table//review may be empty


maybe - prof names, individual prof ratings

rating types - difficulty, good

scheduler page

needs course codes, names, times, room, crn codes
```
structure
frame - buttons, header,  footer
header - search bar
search page - landing page , sign in(skip?)
search results - search bar, load ratings, course codes, rating graphics
	- rating component
		-has graph graphics
selected course - ratings, course code, name
	- rating component
meeting - webrtc meeting rooms
	- mandatory - video, chat
	- would like to have
		-html5 drawing board, games
profile - non anonymous reviews, some profile things, activity tracker
	-activity tracker scrape or use api for github, leetcode, etc.
	-stats for games, activity, chat
	-setting toggles
	- invite to meeting, push, email notification

static html pages ( footer)
	- about
	- contact
	- corporate sounding stuff
	- scheduler?
```
```
reqs:
CSS frameworks: tailwind
client-side framework: react
Database: mongodb, migrate to postgres later
Node.js: server.js 
Sockets: sockets used in signalling conn for webrtc

reqs todo:
jQuery: put in static html file
D3: put in static html file
DHTML: put in static html file
AJAX, web services: oauth, fetch something from external url
multi-threading: webworkers (use for a canvas somewhere)
```
```

scheduler
one panel
we have day, time slot, courses and linked courses
allow search and display choices with vacancies on side
1. when linked course is selected others are disabled
2. put courses into time slots on table
3. if time slots collide don't put the course in
4. persist in localstorage
5. allow course to be dragged and previewed
6. display requirement messages
7. allow export
8. persist in user account on server

planner
one panel
1. dummy data of program map
    program map has some 4 choose 1 options
2. allow manual input of taken courses
3. match with list of taken courses
    match *anything* with required lists first, then match electives
4. parse somthing to get courses
5. dropdown of possible courses for each blank


graph
fetch from alphavantage api, cache and limit new updates to 5/min
something like, onpageload fetches from cache
in prod it would fetch from server that's running some lambda function
display line graph with d3
store last data point
if newdata<olddata rotate canvas 180 and vice versa

meetings page
    navbar
    sidebar
        room list
            room details
            room buttons
        search rooms
        create room
    canvas
        splash graphic
        drawing canvas
        game
        video/audio feed
        preview rooms?
    right bar
        chat
        settings
        advertisements
    footer

    video page
        hide left sidebar
        main canvas
        right bar
            chat
            settings
            ads
        room options on bottom

meetings modal
    list of rooms
    webcam preview

meetings
list of rooms
    list of list of conn id
        new room
            post roomid, peerid to server


    get list of roomid (uuid)
        button for each room 
        options here: get peerlist from db, or get peers from host
            click

                get peers for roomid
                then route to room page
                    room page
                        post peerid and room to collection
                        takes peers as props and connects to all peers
                        send
                            iterate through peers and send
                        leave
                            remove id from collection
        return list of peers for roomid
        last user leaves room> delete room id entries
    
    join
        iterate through list and establish conn
        add id to list
    send
        iterate through list and send
    leave
        remove id from list
ask for permissions
create room > send connection details to server
connect to room > get all peers from server> send connection request to all peers in room
connect to all peers
each peer sends media stream to every other peer
persist chat messages locally


game
canvas
peer sends data packet to all other peers
update canvas with data inputs every tick
lets say tickrate is 120fps
every x ticks check for large discrepancy (actually manually test if this is needed)
data format{
    acceleration
    current speed
    current coordinates(for checking)
    other input commands
}

profile dashboard
profile things(name, etc)
courses you're taking
courses youv'e completed
your schedule
your program map
external links
friends
    start a meeting
    leave a message
    courses your friend is taking
    your friends schedule
    swipe feature

search for friends

global
banner notification on meeting request
toasts

course search results
table of query results
also include your friend is taking/has taken this course

```
Independent Study: webRTC, tailwind

wishlist: 

switch to mongodb cloud for autocomplete

migrate to postgres

seperate out servers for prod