import Markdown from "@/components/markdown";
import { getPostBySlug, getPostsSlug, Post } from "@/lib/managePosts";

export const dynamicParams = false;

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const slugs = getPostsSlug();

  return slugs.map((slug) => {
    slug;
  });
}

export default function Post({ params }: Props) {
  const post = getPostBySlug(params.slug);

  return (
    <>
      <Markdown content={post.content} />
    </>
  );
}
