import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Detail({ params }) {
  let id = params.id;
  console.log("id: ", typeof id);
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").findOne({ _id: new ObjectId(id) });
  // console.log(params.id);

  return (
    <div>
      <h4>상세페이지임</h4>
      <h4>글제목</h4>
      <p>글내용</p>
      {result.title}
    </div>
  );
}
