import { connectToDatabase } from "../../util/mongodb";
export default async (req, res) => {
  const { db } = await connectToDatabase();
    if(req.query.q =="" ||  req.query.q === "undefined") {
          const courses = await db
            .collection("courses")
            .find()
            .sort({ coursecode: 1 })
            .limit(100)
            .toArray();
          res.json(courses);

    }
    else{
        try {
        let result = await db.collection("courses").aggregate([

            {
                "$search": {
                    "autocomplete": {
                        "query":`${req.query.q}`,
                        "path": "coursecode",
                        "fuzzy": {
                            "maxEdits":1,
                            "prefixLength": 2,
                            "maxExpansions": 5
                        }
                    }
                }
            }
        ]).limit(50).toArray();

        res.send(result);
    } catch (e) {
        res.status(418).send({message: e.message});
    }}
}