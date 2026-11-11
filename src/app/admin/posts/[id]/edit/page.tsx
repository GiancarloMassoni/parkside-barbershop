import Link from "next/link";
import { notFound } from "next/navigation";
import PostForm from "../../../PostForm";
import { updatePostAction } from "../../../actions";
import { getPostById } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPostById(Number(id));

  if (!post) {
    notFound();
  }

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
          Edit Post
        </h1>

        <PostForm action={updatePostAction} post={post} submitLabel="Save Changes" />
      </div>
    </main>
  );
}
