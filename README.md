
### Testing
Preferably check out the demo site! https://utofu.vercel.app/

Running locally
```
cd p2p-test
npm run dev
wait ~10s for tailwind files to load, this could be cut down by using the JIT compiler but it's buggy, in production only the css classes that are used are included

You will need a discord account to sign in with.

if using local db
	edit .env to local mongodb connection settings
	create courses collection
	import /data/[aggregate].json into courses collection 

```
The api keys compromised in this repo will be disabled on May 3rd

