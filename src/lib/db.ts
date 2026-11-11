import { neon } from "@neondatabase/serverless";

export type Post = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image_url: string | null;
  published: boolean;
  created_at: string;
  updated_at: string;
};

function getConnectionString() {
  const url = process.env.DATABASE_URL || process.env.POSTGRES_URL;
  if (!url) {
    throw new Error(
      "No database connection string found. Set DATABASE_URL (or POSTGRES_URL) in your environment."
    );
  }
  return url;
}

let sqlClient: ReturnType<typeof neon> | null = null;

function sql() {
  if (!sqlClient) {
    sqlClient = neon(getConnectionString());
  }
  return sqlClient;
}

let schemaReady: Promise<void> | null = null;

function ensureSchema() {
  if (!schemaReady) {
    schemaReady = (async () => {
      const db = sql();
      await db`
        CREATE TABLE IF NOT EXISTS posts (
          id SERIAL PRIMARY KEY,
          title TEXT NOT NULL,
          slug TEXT NOT NULL UNIQUE,
          excerpt TEXT NOT NULL DEFAULT '',
          content TEXT NOT NULL DEFAULT '',
          image_url TEXT,
          published BOOLEAN NOT NULL DEFAULT false,
          created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
          updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
        )
      `;
    })();
  }
  return schemaReady;
}

export async function getAllPosts(): Promise<Post[]> {
  await ensureSchema();
  const db = sql();
  const rows = (await db`SELECT * FROM posts ORDER BY created_at DESC`) as unknown as Post[];
  return rows;
}

export async function getPublishedPosts(): Promise<Post[]> {
  await ensureSchema();
  const db = sql();
  const rows = (await db`
    SELECT * FROM posts WHERE published = true ORDER BY created_at DESC
  `) as unknown as Post[];
  return rows;
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  await ensureSchema();
  const db = sql();
  const rows = (await db`SELECT * FROM posts WHERE slug = ${slug} LIMIT 1`) as unknown as Post[];
  return rows[0] ?? null;
}

export async function getPostById(id: number): Promise<Post | null> {
  await ensureSchema();
  const db = sql();
  const rows = (await db`SELECT * FROM posts WHERE id = ${id} LIMIT 1`) as unknown as Post[];
  return rows[0] ?? null;
}

export async function isSlugTaken(
  slug: string,
  excludeId?: number
): Promise<boolean> {
  await ensureSchema();
  const db = sql();
  const rows = (excludeId
    ? await db`SELECT 1 FROM posts WHERE slug = ${slug} AND id != ${excludeId} LIMIT 1`
    : await db`SELECT 1 FROM posts WHERE slug = ${slug} LIMIT 1`) as unknown as unknown[];
  return rows.length > 0;
}

export async function createPost(data: {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image_url: string | null;
  published: boolean;
}): Promise<Post> {
  await ensureSchema();
  const db = sql();
  const rows = (await db`
    INSERT INTO posts (title, slug, excerpt, content, image_url, published)
    VALUES (${data.title}, ${data.slug}, ${data.excerpt}, ${data.content}, ${data.image_url}, ${data.published})
    RETURNING *
  `) as unknown as Post[];
  return rows[0];
}

export async function updatePost(
  id: number,
  data: {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    image_url: string | null;
    published: boolean;
  }
): Promise<Post> {
  await ensureSchema();
  const db = sql();
  const rows = (await db`
    UPDATE posts
    SET title = ${data.title},
        slug = ${data.slug},
        excerpt = ${data.excerpt},
        content = ${data.content},
        image_url = ${data.image_url},
        published = ${data.published},
        updated_at = now()
    WHERE id = ${id}
    RETURNING *
  `) as unknown as Post[];
  return rows[0];
}

export async function deletePost(id: number): Promise<void> {
  await ensureSchema();
  const db = sql();
  await db`DELETE FROM posts WHERE id = ${id}`;
}
