"use client";
import Counter from "@/components/Counter";
import Feed from "@/components/Feed";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <main className="">
      <div className="">
        <h1 className="bg-slate-300">Redux</h1>
        <button
          onClick={() => {
            router.push("/mutation");
          }}
          className="px-5 py-3 bg-teal-500 rounded-md my-9"
        >
          Go to mutation
        </button>
        <Counter />
        <Feed />
      </div>
    </main>
  );
}
