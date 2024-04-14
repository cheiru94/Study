import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Update({ params }) {
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(params.id.toString()) });

  return (
    <>
      <div>
        <h4>글 수정</h4>
        <form action="/api/put" method="POST">
          <input name="id" defaultValue={params.id} type="hidden" />
          <p>
            제목 입력 : <input name="title" defaultValue={result.title} />
          </p>
          <p>
            내용 입력:
            <textarea name="content" defaultValue={result.content}></textarea>
          </p>
          <button type="submit">수정완료</button>
        </form>
      </div>
    </>
  );
}
