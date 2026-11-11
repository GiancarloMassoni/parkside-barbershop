import Link from "next/link";
import Image from "next/image";
import { getPublishedPosts } from "@/lib/db";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Blog | Park Side Barbershop",
  description: "News, tips, and updates from Park Side Barbershop.",
};

export default async function BlogIndexPage() {
  let posts: Awaited<ReturnType<typeof getPublishedPosts>> = [];
  try {
    posts = await getPublishedPosts();
  } catch (error) {
    console.error("Failed to load blog posts:", error);
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0b0b0b] pt-32 pb-24 font-body">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage: "url(/grain.png)",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8">
        <h1 className="mb-16 text-center text-4xl font-semibold tracking-wide text-zinc-100">
          From the Shop
        </h1>

        {posts.length === 0 ? (
          <p className="text-center text-zinc-400">
            No posts yet — check back soon.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group overflow-hidden rounded-lg border border-white/10 bg-black/60 transition hover:border-white/20"
              >
                {post.image_url && (
                  <div className="relative aspect-video w-full bg-zinc-900">
                    <Image
                      src={post.image_url}
                      alt={post.title}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-[1.02]"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                )}
                <div className="p-6">
                  <p className="mb-2 text-xs uppercase tracking-widest text-zinc-500">
                    {new Date(post.created_at).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <h2 className="mb-2 text-lg font-semibold text-zinc-100 group-hover:text-white">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-sm leading-relaxed text-zinc-400">
                      {post.excerpt}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
