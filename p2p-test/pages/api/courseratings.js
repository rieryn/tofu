import { connectToDatabase } from "../../util/mongodb";
export default async (req, res) => {
	if (req.method === 'POST') {
      console.log(req)
      console.log(req.body) 
   }
  const { db } = await connectToDatabase();
  const ratings = await db
    .collection("ratings")
    .find({coursecode: new RegExp( req.body, 'i' )})
    .sort({ coursecode: 1 })
    .limit(50)
    .toArray();
  res.status(200).json(ratings);
};
