export interface Post {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  content: string;
}

export const posts: Post[] = [];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getAllPosts(): Post[] {
  return posts;
}
