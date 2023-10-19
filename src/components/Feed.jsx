"use client";
import {
  useGetPostByIdQuery,
  useGetPostsQuery,
} from "@/redux/features/api/baseApi";

const PostCard = ({ post }) => {
  return (
    <div className="p-10 rounded-md bg-zinc-800 text-zinc-300">
      <h1 className="mb-5 text-xl font-semibold cursor-pointer hover:underline">
        John Doe
      </h1>
      <p>{post?.body}</p>
      <div className="my-5 border-b border-zinc-700"></div>
    </div>
  );
};

function Feed() {
  const { data: posts, isLoading, isError, error } = useGetPostsQuery();
  const {
    data: post,
    isLoading: isPostLoading,
    isError: postLoadingError,
    error: postError,
  } = useGetPostByIdQuery(1);
  console.log(post);
  if (isLoading) {
    return <p className="text-9xl text-zinc-300">Loading...</p>;
  }
  if (!isLoading && isError) {
    return <p className="text-9xl text-zinc-300">Something Went Wrong...</p>;
  }
  return (
    <div>
      <h1>Feed</h1>
      <div className="flex flex-col gap-3">
        {posts?.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
