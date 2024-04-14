import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function putItem(req, res) {
  console.log("req: ", req);
  console.log("⭐️⭐️요청받은 데이터", req.body);
  const db = (await connectDB).db("forum");
  db.collection("post").updateOne(
    { _id: new ObjectId(req.body.id) },
    { $set: { title: req.body.title, content: req.body.content } }
  );

  return res.redirect(302, "/list");
}
