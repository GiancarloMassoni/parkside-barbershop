"use client";

import { useActionState, useState } from "react";
import Image from "next/image";
import type { Post } from "@/lib/db";
import type { FormState } from "./actions";

const initialState: FormState = {};

function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function PostForm({
  action,
  post,
  submitLabel,
}: {
  action: (prevState: FormState, formData: FormData) => Promise<FormState>;
  post?: Post;
  submitLabel: string;
}) {
  const [state, formAction, pending] = useActionState(action, initialState);
  const [slug, setSlug] = useState(post?.slug ?? "");
  const [slugTouched, setSlugTouched] = useState(Boolean(post));

  return (
    <form action={formAction} className="space-y-6">
      {post && <input type="hidden" name="id" value={post.id} />}

      <div>
        <label
          htmlFor="title"
          className="mb-2 block text-xs uppercase tracking-widest text-zinc-400"
        >
          Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          required
          defaultValue={post?.title}
          onChange={(e) => {
            if (!slugTouched) setSlug(slugify(e.target.value));
          }}
          className="w-full rounded-md border border-white/10 bg-zinc-900 px-4 py-3 text-sm text-zinc-100 outline-none focus:border-white/30"
        />
      </div>

      <div>
        <label
          htmlFor="slug"
          className="mb-2 block text-xs uppercase tracking-widest text-zinc-400"
        >
          URL Slug
        </label>
        <input
          id="slug"
          name="slug"
          type="text"
          value={slug}
          onChange={(e) => {
            setSlugTouched(true);
            setSlug(e.target.value);
          }}
          placeholder="auto-generated-from-title"
          className="w-full rounded-md border border-white/10 bg-zinc-900 px-4 py-3 text-sm text-zinc-100 outline-none focus:border-white/30"
        />
        <p className="mt-1 text-xs text-zinc-500">
          yoursite.com/blog/<span className="text-zinc-300">{slug || "..."}</span>
        </p>
      </div>

      <div>
        <label
          htmlFor="excerpt"
          className="mb-2 block text-xs uppercase tracking-widest text-zinc-400"
        >
          Short Excerpt
        </label>
        <textarea
          id="excerpt"
          name="excerpt"
          rows={2}
          defaultValue={post?.excerpt}
          placeholder="One or two sentences shown on the blog list page."
          className="w-full rounded-md border border-white/10 bg-zinc-900 px-4 py-3 text-sm text-zinc-100 outline-none focus:border-white/30"
        />
      </div>

      <div>
        <label
          htmlFor="image"
          className="mb-2 block text-xs uppercase tracking-widest text-zinc-400"
        >
          Cover Image {post?.image_url && "(leave empty to keep current image)"}
        </label>
        {post?.image_url && (
          <div className="relative mb-3 h-40 w-full max-w-xs overflow-hidden rounded-md border border-white/10">
            <Image
              src={post.image_url}
              alt=""
              fill
              className="object-cover"
              sizes="320px"
            />
          </div>
        )}
        <input
          id="image"
          name="image"
          type="file"
          accept="image/*"
          className="w-full text-sm text-zinc-300 file:mr-4 file:rounded-md file:border file:border-white/20 file:bg-white/10 file:px-4 file:py-2 file:text-xs file:uppercase file:tracking-widest file:text-zinc-100 hover:file:bg-white/15"
        />
      </div>

      <div>
        <label
          htmlFor="content"
          className="mb-2 block text-xs uppercase tracking-widest text-zinc-400"
        >
          Content (Markdown)
        </label>
        <textarea
          id="content"
          name="content"
          rows={16}
          required
          defaultValue={post?.content}
          className="w-full rounded-md border border-white/10 bg-zinc-900 px-4 py-3 font-mono text-sm text-zinc-100 outline-none focus:border-white/30"
        />
        <p className="mt-1 text-xs text-zinc-500">
          Basic formatting: <code># Heading</code>, <code>## Subheading</code>,{" "}
          <code>**bold**</code>, <code>*italic*</code>, <code>- list item</code>,{" "}
          <code>[link text](https://example.com)</code>
        </p>
      </div>

      <label className="flex items-center gap-2 text-sm text-zinc-300">
        <input
          type="checkbox"
          name="published"
          defaultChecked={post?.published ?? false}
          className="h-4 w-4 rounded border-white/20 bg-zinc-900"
        />
        Published (visible on the public blog)
      </label>

      {state.error && <p className="text-sm text-red-400">{state.error}</p>}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-zinc-100 backdrop-blur transition hover:bg-white/15 hover:border-white/30 disabled:opacity-50"
      >
        {pending ? "Saving..." : submitLabel}
      </button>
    </form>
  );
}
