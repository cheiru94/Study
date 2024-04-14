import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Detail(props) {
  console.log(props);
  // console.log("params: ", params);
  // let id = params.id;
  // console.log("id: ", typeof id);
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });
  // console.log(params.id);

  return (
    <>
      <div>
        <h4>상세페이지임</h4>
        <h1>글제목</h1>
        {result.title}

        <p />
        <p />

        <h3>글내용</h3>
        {result.content}
      </div>

      <form action={`/detail/${props.params.id}/update`} method="Get">
        <button>수정</button>
      </form>
    </>
  );
}
