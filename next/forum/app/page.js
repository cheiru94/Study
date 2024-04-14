import Image from "next/image";
import styles from "./page.module.css";
import { connectDB } from "@/util/database";

export default async function Home() {
  const client = await connectDB;
  const db = client.db("forum");
  // const db =  await connectDB.client.db("forum");   // 이렇게 사용해도 같음

  let result = await db.collection("post").find().toArray();
  console.log("result: ", result);

  return (
    <>
      <div>{result[0].title}</div>
      <div>{result[0].content}</div>
    </>
  );
}
