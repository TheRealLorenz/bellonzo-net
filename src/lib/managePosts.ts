import matter from "gray-matter";
import path from "path";
import fs from "fs";

const postsDir = path.join(process.cwd(), "_posts");

type PostData = {
  author: string;
  date: string;
};

export type Post = {
  data: PostData;
  content: string;
};

function assertsValid(
  data: { [key: string]: any },
  slug: string,
): asserts data is PostData {
  const fields: (keyof PostData)[] = ["author", "date"] as const;

  fields.forEach((field) => {
    if (!data[field]) {
      throw `missing field '${field}' in '${slug}.md'`;
    }
  });
}

export const getPostBySlug = (slug: string): Post => {
  const fullPath = path.join(postsDir, `${slug}.md`);
  const fullContent = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(fullContent);

  assertsValid(data, slug);

  return {
    content,
    data,
  };
};

export const getPostsSlug = () => {
  const fileNames = fs.readdirSync(postsDir);
  const slugs = fileNames.map((fileName) => fileName.replace(/\.md$/, ""));

  slugs.forEach((slug) => getPostBySlug(slug));

  return slugs;
};
