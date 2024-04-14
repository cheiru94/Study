import { connectDB } from "@/util/database";

const Signup = async (req, res) => {
  console.log(req.body);
  if (req.method == "POST") {
    if (req.body.id == "" || req.body.pw == "") {
      return res.status(500).json("아이디 또는 비번을 반드시 입력해라");
    }
    const db = (await connectDB).db("forum");
    await db.collection("user").insertOne(req.body);
    return res.redirect(302, "/list");
  }
};

export default Signup;
