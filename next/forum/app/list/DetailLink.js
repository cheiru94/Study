"use client";

import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

export default function DetailLink({ id }) {
  let route = useRouter();

  return (
    <button
      onClick={() => {
        route.push(`/detail/${id}`);
      }}
    >
      이동
    </button>
  );
}
