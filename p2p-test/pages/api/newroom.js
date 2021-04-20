import { connectToDatabase } from "../../util/mongodb";
var count =[];
export default async (req, res) => {

	if (req.method === 'POST') {
    const { db } = await connectToDatabase();
      let data = req.body;
      db.collection('rooms').insertOne({roomid: data.uuid, peerid: [], roomname: data.roomname, roomdesc: data.description}, function (err, result) {
            console.log('item has been inserted');
            res.redirect('/rooms?roomid='+data.uuid)
            if(err){
              console.log(err)
            }
        });
      
   }
      else{
     
      res.redirect('/rooms');
      }
};
