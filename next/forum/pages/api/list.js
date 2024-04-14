import { connectDB } from "@/util/database";

export default async function getAll(req, res) {
  if (req.method === "GET") {
    const db = (await connectDB).db("forum");
    let result = await db.collection("post").find().toArray();

    return res.status(200).json(result);
  }
  if (req.method === "POST") {
  }
}
