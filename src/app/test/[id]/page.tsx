"use client";

import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  const id = params.id;

  return <div>{id}포스트3</div>;
}
