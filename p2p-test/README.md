req:
have mongodb 4.4 installed
db uri: localhost:27017
db name: local
collections:
courses
ratings

import json to test
using mock data for now

env.local is set to default mongodb configs, change it if yours is diff

run:
npm i
npm run dev

open http://localhost:3000/

testing webrtc: open http://localhost:3000/ twice

server.js is for reqs, keep it updated

will default to bultin routing otherwise(dev env only)

structure:
/public: static files
/pages: react components that have routes
/components: like actual react components
/pages/api: db stuff here
server.js: express server

BIG TODO:
login/session management


rating page
loads course codes, names from course table
loads ratings, reviews from rating table//review may be empty


maybe - prof names, individual prof ratings
rating types - difficulty, good
scheduler page
needs course codes, names, times, room, crn codes //yikes

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

Independent Study: webRTC