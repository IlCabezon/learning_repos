import Link from "next/link";

const fetchSinglePost = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.json())
} 

export default async function PostPage ({ children, params }) {
  const { id } = params
  const post = await fetchSinglePost(id);
  console.log(post)
  return <article>
    <h1>{post.title}</h1>
    <p>{post.body}</p>
    <Link href={`/posts/${id}/comments`}>Ver comentarios</Link>
    {children}
  </article>
}
