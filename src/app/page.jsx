import Counter from "@/components/Counter";
import Feed from "@/components/Feed";
import Image from "next/image";

export default function Page() {
  return (
    <main className="">
      <div className="">
        <h1 className="bg-slate-300">Redux</h1>
        <Counter />
        <Feed />
      </div>
    </main>
  );
}
