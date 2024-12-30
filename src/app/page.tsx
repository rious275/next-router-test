import Hello from "@/components/Hello";
import Link from "next/link";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Suspense fallback={<div>loading...</div>}>
        <Hello />
      </Suspense>
      <Link href="/test">go test</Link>
    </div>
  );
}
