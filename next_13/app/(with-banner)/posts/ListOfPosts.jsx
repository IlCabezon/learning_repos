import Link from "next/link";
import LikeButton from "./LikeButton";

const fetchPosts = async () => {
  return await (
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      cache: "no-store",
      next: {
        revalidate: 10,
      }
    })
  ).json();
};

export default async function ListOfPosts() {
  const posts = await fetchPosts();

  return (
    posts &&
    posts.map((post) => (
      <article key={post.id}>
        <Link href={`/posts/${post.id}`}>
          <h2 style={{ color: "#09f" }}>{post.title}</h2>
          <p>{post.body}</p>
        </Link>
        <LikeButton id={post.id} />
      </article>
    ))
  );
}
