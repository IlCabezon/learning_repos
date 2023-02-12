
import Link from 'next/link'
import styles from './header.module.css'

const links = [
  {
    label: 'home',
    href: '/'
  },
  {
    label: 'solutions',
    href: '/solutions'
  },
  {
    label: 'posts',
    href: '/posts'
  }
]

export default function Navigation () {
  return (
    <header className={styles.navigation_header}>
      <nav>
        <ul className={styles.links_ul}>
          {links.map(({ label, href }, i) => (
            <li key={`${href}_${i}`}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
