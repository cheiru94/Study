import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  let name = "lee";
  let link =
    "https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app";
  return (
    <main>
      <h1 className="title">Programming Log</h1>
      <p className="title-sub">by dev kim</p>
    </main>
  );
}
