import Counter from "./posts/Counter"

export default function PostLayout ({ children }) {
  return (
    <div>
      <Counter />
      {children}
    </div>
  )
}
