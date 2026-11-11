import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPostBySlug } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post;
  try {
    post = await getPostBySlug(slug);
  } catch (error) {
    console.error("Failed to load blog post:", error);
  }

  if (!post || !post.published) {
    notFound();
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

      <article className="relative z-10 mx-auto max-w-3xl px-6 lg:px-8">
        <Link
          href="/blog"
          className="mb-8 inline-block text-xs uppercase tracking-widest text-zinc-400 hover:text-white"
        >
          ← Back to Blog
        </Link>

        <p className="mb-3 text-xs uppercase tracking-widest text-zinc-500">
          {new Date(post.created_at).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <h1 className="mb-8 text-4xl font-semibold tracking-wide text-zinc-100">
          {post.title}
        </h1>

        {post.image_url && (
          <div className="relative mb-10 aspect-video w-full overflow-hidden rounded-lg border border-white/10 bg-zinc-900">
            <Image
              src={post.image_url}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 768px"
              priority
            />
          </div>
        )}

        <div className="prose prose-invert prose-zinc max-w-none prose-headings:tracking-wide prose-a:text-zinc-100">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </main>
  );
}
