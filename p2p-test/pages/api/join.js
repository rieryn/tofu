import { connectToDatabase } from "../../util/mongodb";
export default async (req, res) => {

	if (req.method === 'GET') {
    const { db } = await connectToDatabase();
      let data = req.query;
      db.collection('rooms').findOneAndUpdate(
          {"roomid": req.query.roomid},
          { $addToSet: {"peerid": req.query.peerid}},
          { upsert:true})
   }
      else{
      res.redirect('/');
      }
};
