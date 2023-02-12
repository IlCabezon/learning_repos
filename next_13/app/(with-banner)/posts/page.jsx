import { Suspense } from 'react'
import ListOfPosts from './ListOfPosts'

export default function PostsPage () {
  return (
    <article>
      <Suspense fallback={<p>cargando con suspense</p>}>
        <ListOfPosts />
      </Suspense>
    </article>
  )
}
