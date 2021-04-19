import { connectToDatabase } from "../../util/mongodb";
var count =[];
export default async (req, res) => {

	if (req.method === 'POST') {
        // add to db
        console.log("added to db");
    }
    res.redirect('/schedulebuilder');
};
