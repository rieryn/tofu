import { connectToDatabase } from "../../util/mongodb";
export default async (req, res) => {
	console.log(req.query.course)
  const { db } = await connectToDatabase();
  const course = await db
    .collection("courses")
    .find({coursecode: req.query.course})
    .sort({ coursecode: 1 })
    .limit(1)
    .toArray();
  res.json(course);
};