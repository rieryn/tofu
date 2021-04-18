import { connectToDatabase } from "../../util/mongodb";
var count =[];
var ObjectId = require('mongodb').ObjectID;

export default async (req, res) => {
  //need to check for and update the user account with reviewed course
  //need to update the course review fields
  if (req.method === 'POST') {
    const { db } = await connectToDatabase();
      let data = req.body;
      console.log(data)
      const user = await db.collection('accounts').find({"userId": ObjectId(data.userid)}).toArray();
      console.log(user)
      console.log(user[0].reviewedcourses)
      if(user[0].reviewedcourses?.includes(data.coursecode)){
        console.log(data.coursecode)
        console.log("already reviewed")
      }
      else{
        db.collection('accounts').findOneAndUpdate(
          {"userId": ObjectId(data.userid)},
          { $addToSet: {"reviewedcourses": data.coursecode}},
          { upsert:true})
        db.collection('courses').findOneAndUpdate(
          {"coursecode": data.coursecode},
          { $addToSet: {"reviews": data.reviewbody},
            $inc: {"numratings": 1,"easyratingtotal": parseInt(data.easyrating),"goodratingtotal": parseInt(data.goodrating)}},
          { upsert:true})
      }

   }
};
