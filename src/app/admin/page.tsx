import Link from "next/link";
import { getAllPosts } from "@/lib/db";
import { deletePostAction, logoutAction } from "./actions";
import DeleteButton from "./DeleteButton";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const posts = await getAllPosts();

  return (
    <main className="min-h-screen bg-black px-6 py-12 font-body lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 flex items-center justify-between">
          <h1 className="text-2xl font-semibold tracking-wide text-zinc-100">
            Blog Posts
          </h1>
          <div className="flex items-center gap-4">
            <Link
              href="/admin/posts/new"
              className="rounded-md border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-zinc-100 transition hover:bg-white/15 hover:border-white/30"
            >
              New Post
            </Link>
            <form action={logoutAction}>
              <button
                type="submit"
                className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white"
              >
                Log Out
              </button>
            </form>
          </div>
        </div>

        {posts.length === 0 ? (
          <p className="text-sm text-zinc-400">
            No posts yet. Click &ldquo;New Post&rdquo; to write your first one.
          </p>
        ) : (
          <div className="space-y-3">
            {posts.map((post) => (
              <div
                key={post.id}
                className="flex items-center justify-between rounded-lg border border-white/10 bg-zinc-900/60 px-5 py-4"
              >
                <div>
                  <p className="font-medium text-zinc-100">{post.title}</p>
                  <p className="text-xs text-zinc-500">
                    {post.published ? (
                      <span className="text-emerald-400">Published</span>
                    ) : (
                      <span className="text-zinc-500">Draft</span>
                    )}
                    {" · "}
                    {new Date(post.created_at).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  {post.published && (
                    <Link
                      href={`/blog/${post.slug}`}
                      target="_blank"
                      className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white"
                    >
                      View
                    </Link>
                  )}
                  <Link
                    href={`/admin/posts/${post.id}/edit`}
                    className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white"
                  >
                    Edit
                  </Link>
                  <form action={deletePostAction.bind(null, post.id)}>
                    <DeleteButton />
                  </form>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
