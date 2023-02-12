
const fetchComments = async (id) => {
  /* throw new Error('Error al cargar los comentarios') */
  await new Promise(resolve => setTimeout(resolve, 3000));
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).then(res => res.json())
} 

export default async function PostPage ({ params }) {
  const { id } = params
  const comments = await fetchComments(id);
 
  return <ul>
    {
      comments.map(comment => (
        <li key={comment.id}>
          <h1>
            {comment.name}
          </h1>
          <p>
            {comment.body}
          </p>
        </li>
      ))
    }
  </ul>
}
