import { Inter } from "next/font/google";

import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <p>현대카드 무이자이벤트중</p>
        {children}
      </body>
    </html>
  );
}
