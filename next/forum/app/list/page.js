import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  return (
    <>
      <button>
        <Link href={`/write`}>작성</Link>
      </button>
      <div className="list-bg">
        {result.map((item) => (
          <div className="list-item">
            <Link href={`/detail/${item._id}`}>
              <h4>{item.title}</h4>
            </Link>
            <p>1월 1일</p>
            <DetailLink id={item._id} />
          </div>
        ))}
      </div>
    </>
  );
}
