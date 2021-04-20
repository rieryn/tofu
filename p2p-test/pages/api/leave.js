import { connectToDatabase } from "../../util/mongodb";
export default async (req, res) => {

	if (req.method === 'GET') {
    console.log(req.query.peerid)
    const { db } = await connectToDatabase();
      let data = req.query;
      db.collection('rooms').update(
          {},
          { $pull: {"peerid": req.query.peerid}},
          { multi: true })
      res.redirect('/rooms');
   }
      else{
      res.redirect('/');
      }
};
