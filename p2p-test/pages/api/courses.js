import { connectToDatabase } from "../../util/mongodb";
export default async (req, res) => {
  const { db } = await connectToDatabase();
  const courses = await db
    .collection("courses")
    .find()
    .sort({ coursecode: 1 })
    .limit(50)
    .toArray();
  res.json(courses);
};