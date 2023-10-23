"use client";
import { useSetPostMutation } from "@/redux/features/api/baseApi";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

function Page() {
  const router = useRouter();

  const { register, handleSubmit } = useForm();
  const [setPost, { data: postData }] = useSetPostMutation();

  console.log(postData);
  const onSubmit = (data) => {
    // setPost(data);
    setPost({
      title: "This is a title",
      body: data.post,
      userId: 5644,
    });
  };

  //   const [function, object] = useSetPostMutation()

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
