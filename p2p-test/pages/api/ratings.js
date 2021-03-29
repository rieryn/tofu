import { connectToDatabase } from "../../util/mongodb";
export default async (req, res) => {
  const { db } = await connectToDatabase();
  const ratings = await db
    .collection("ratings")
    .find()
    .sort({ coursecode: 1 })
    .limit(50)
    .toArray();
  res.json(ratings);
};