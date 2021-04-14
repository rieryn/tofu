import { connectToDatabase } from "../../util/mongodb";
export default async (req, res) => {
  const { db } = await connectToDatabase();
   let qval = req.query.q.toString();
   console.log(typeof `${req.query.q}`)
   console.log(`${req.query.q}`)
   console.log( `CS`)
   console.log (typeof `CS`)
    try {
        let result = await db.collection("courses").aggregate([
            {
                "$search": {
                    "autocomplete": {
                        "query":`${req.query.q}`,
                        "path": "coursecode",
                        "fuzzy": {
                            "maxEdits":1,
                            "prefixLength": 0,
                            "maxExpansions": 5
                        }
                    }
                }
            }
        ]).toArray();
        console.log(result);
        res.send(result);
    } catch (e) {
        res.status(418).send({message: e.message});
    }
}