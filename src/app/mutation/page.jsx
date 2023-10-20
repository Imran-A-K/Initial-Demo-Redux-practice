"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

function Page() {
  const router = useRouter();

  const { register, handleSubmit } = useForm();
  const onSubmit = (value) => {
    console.log(value);
  };
  return (
    <div>
      <button
        onClick={() => {
          router.push("/");
        }}
        className="px-5 py-3 bg-teal-500 rounded-md my-9"
      >
        Back to Home
      </button>
      <form
        className="flex justify-center gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input type="text" className="ml-5 bg-zinc-100" {...register("post")} />
        <button type="submit" className="px-5 py-3 bg-teal-500 rounded-md">
          Post
        </button>
      </form>
    </div>
  );
}

export default Page;
