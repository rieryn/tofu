import { connectToDatabase } from "../../util/mongodb";
export default async (req, res) => {
  const { db } = await connectToDatabase();

    try {
        let result = await db.collection("courses").aggregate([
            {
                "$search": {
                    "autocomplete": {
                        "query": `CSCI 4160U`,
                        "path": "coursecode",
                        "fuzzy": {
                            "maxEdits":1,
                            "prefixLength": 2,
                            "maxExpansions": 5
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