import { connectToDatabase } from "../../util/mongodb";
export default async (req, res) => {
  const { db } = await connectToDatabase();

    try {
        let result = await db.collection("courses").aggregate([
            {
                "$search": {
                    "autocomplete": {
                        "query": `C`,
                        "path": "coursecode",
                        "fuzzy": {
                            "maxEdits": 2,
                            "prefixLength": 0
                        }
                    }
                }
            }
        ]).toArray();
        res.send(result);
    } catch (e) {
        res.status(418).send({message: e.message});
    }
}