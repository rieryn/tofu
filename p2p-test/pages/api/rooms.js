import { connectToDatabase } from "../../util/mongodb";
var count =[];
export default async (req, res) => {

	if (req.method === 'POST') {
    const { db } = await connectToDatabase();
      let data = JSON.parse(req.body);

      db.collection('rooms').insertOne({roomid: data.roomid,peerid:data.peerid}, function (err, result) {
            console.log('item has been inserted');
            if(err){
              console.log(err)
            }
        });
      
      count.push(req.body);
      console.log(count)
      console.log(req.body) 
   }
   if (req.method === 'GET') {
         const { db } = await connectToDatabase();
         console.log(req.query)
         console.log(parseInt(req.query.roomid))
      if(req.query.roomid){
     const peers = await db
      .collection("rooms")
      .find({roomid:parseInt(req.query.roomid)},{peerid: 1})
      .toArray();
      res.status(200).json(peers);
      }
      else{
        const rooms = await db
      .collection("rooms")
      .distinct("roomid")
      res.status(200).json(rooms);
      }
   }

};
