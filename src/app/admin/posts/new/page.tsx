import Link from "next/link";
import PostForm from "../../PostForm";
import { createPostAction } from "../../actions";

export default function NewPostPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-12 font-body lg:px-8">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/admin"
          className="mb-8 inline-block text-xs uppercase tracking-widest text-zinc-400 hover:text-white"
        >
          ← Back to Posts
        </Link>

        <h1 className="mb-8 text-2xl font-semibold tracking-wide text-zinc-100">
          New Post
        </h1>

        <PostForm action={createPostAction} submitLabel="Create Post" />
      </div>
    </main>
  );
}
