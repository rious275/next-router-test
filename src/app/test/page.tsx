"use client";

import { useStore } from "@/components/Store";
import Image from "next/image";
import Link from "next/link";
import test from "../test.jpg";

export default function Test() {
  const { bears, increase } = useStore();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Link href={`/test/${bears}`}>동적 라우팅</Link>

      <button onClick={increase}>{bears}</button>

      <div>서버이미지</div>
      <Image
        width={100}
        height={100}
        src="https://img.studiomate.kr/avatars/DrlGAAM8aj0MOWKKKJiBnBooSUdKpCDTZ0MR8E1a_148x148.jpg"
        alt=""
      />

      <div>로컬이미111지</div>
      <Image width={100} height={100} src={test} alt="" />
      <Link href="/">go home1234</Link>
    </div>
  );
}
