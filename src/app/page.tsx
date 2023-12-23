import { getPostBySlug, getPostsSlug } from "@/lib/managePosts";
import style from "./page.module.scss";
import Link from "next/link";

export default function Home() {
  let posts = getPostsSlug()
    .map((slug) => getPostBySlug(slug))
    .sort((a, b) => (a.data.date < b.data.date ? -1 : 1));

  return (
    <main>
      <h1>Bellonzo&apos;s Blog</h1>

      <h2>Latest blogposts</h2>
      <div className={style.showcase}></div>

      {posts.map((post) => (
        <Link href={`/posts/${post.data.slug}`} key={post.data.title}>
          <div className={style.card}>
            <div className={style["card-bottom"]}>
              <p className={style.title}>{post.data.title}</p>
              <p className={style.author}>{post.data.author}</p>
            </div>
          </div>
        </Link>
      ))}
    </main>
  );
}
