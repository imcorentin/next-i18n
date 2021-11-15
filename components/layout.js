import { useRouter } from 'next/dist/client/router'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Layout = ({ children }) => {
  const router = useRouter()

  return ( 
    <>   
      <header className={styles.header}>
        {router.locales.map((locale, i) => (
          <Link key={i} href={router.asPath} locale={locale}>
            <a>{locale}</a>
          </Link>
        ))}
      </header>

      <div>{children}</div>

      <footer className={styles.footer}>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
      </footer>
    </>
  )
}

export default Layout