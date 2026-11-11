"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { put } from "@vercel/blob";
import {
  checkPassword,
  createSessionToken,
  SESSION_COOKIE_NAME,
  SESSION_MAX_AGE_SECONDS,
} from "@/lib/auth";
import {
  createPost,
  deletePost,
  getPostById,
  isSlugTaken,
  updatePost,
} from "@/lib/db";

export type FormState = { error?: string };

export async function loginAction(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const password = String(formData.get("password") || "");

  if (!checkPassword(password)) {
    return { error: "Incorrect password." };
  }

  const token = await createSessionToken();
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE_SECONDS,
  });

  redirect("/admin");
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
  redirect("/admin/login");
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

async function uploadImageIfProvided(formData: FormData): Promise<string | null> {
  const file = formData.get("image");
  if (file instanceof File && file.size > 0) {
    const blob = await put(`blog/${Date.now()}-${file.name}`, file, {
      access: "public",
      addRandomSuffix: true,
    });
    return blob.url;
  }
  return null;
}

export async function createPostAction(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const title = String(formData.get("title") || "").trim();
  const excerpt = String(formData.get("excerpt") || "").trim();
  const content = String(formData.get("content") || "").trim();
  const published = formData.get("published") === "on";
  const slug = slugify(String(formData.get("slug") || "") || title);

  if (!title || !content) {
    return { error: "Title and content are required." };
  }
  if (!slug) {
    return { error: "Could not generate a URL slug from that title." };
  }
  if (await isSlugTaken(slug)) {
    return { error: `The URL slug "${slug}" is already in use by another post.` };
  }

  const imageUrl = await uploadImageIfProvided(formData);

  const post = await createPost({
    title,
    slug,
    excerpt,
    content,
    image_url: imageUrl,
    published,
  });

  revalidatePath("/blog");
  revalidatePath(`/blog/${post.slug}`);
  redirect("/admin");
}

export async function updatePostAction(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const id = Number(formData.get("id"));
  const title = String(formData.get("title") || "").trim();
  const excerpt = String(formData.get("excerpt") || "").trim();
  const content = String(formData.get("content") || "").trim();
  const published = formData.get("published") === "on";
  const slug = slugify(String(formData.get("slug") || "") || title);

  if (!id) return { error: "Missing post id." };

  const existing = await getPostById(id);
  if (!existing) return { error: "Post not found." };

  if (!title || !content) {
    return { error: "Title and content are required." };
  }
  if (!slug) {
    return { error: "Could not generate a URL slug from that title." };
  }
  if (await isSlugTaken(slug, id)) {
    return { error: `The URL slug "${slug}" is already in use by another post.` };
  }

  const newImageUrl = await uploadImageIfProvided(formData);
  const imageUrl = newImageUrl ?? existing.image_url;

  await updatePost(id, {
    title,
    slug,
    excerpt,
    content,
    image_url: imageUrl,
    published,
  });

  revalidatePath("/blog");
  revalidatePath(`/blog/${existing.slug}`);
  revalidatePath(`/blog/${slug}`);
  redirect("/admin");
}

export async function deletePostAction(id: number) {
  const existing = await getPostById(id);
  await deletePost(id);
  revalidatePath("/blog");
  if (existing) revalidatePath(`/blog/${existing.slug}`);
  redirect("/admin");
}
