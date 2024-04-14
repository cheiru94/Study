import { connectDB } from "@/util/database";

const create = async (req, res) => {
  const createId = async () => {
    const db = (await connectDB).db("forum");
    const count = await db.collection("post").find().toArray();
    console.log("count: ", count.legnth);
    return count.length + 1;
  };

  if (req.method == "POST") {
    let id = await createId();
    const db = (await connectDB).db("forum");
    await db.collection("post").insertOne({ ...req.body, id });

    const inputedData = req.body.content;
    console.log("inputedData: ", inputedData.length);

    if (inputedData.length >= 1) {
      return res.redirect(302, "/list");
    } else {
      return res.status(400).json("단디 안치나 ㅡㅡ");
    }
  }
};

export default create;
