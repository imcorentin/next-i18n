import { useRouter } from 'next/dist/client/router'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

export default function About() {
  let router = useRouter()

  let greeting =
    router.locale === 'en-US'
      ? 'About'
      : router.locale === 'de'
        ? 'Über'
        : router.locale === 'fr'
          ? 'A propos'
          : ''

  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>{greeting}</h1>
        </main>
      </div>
    </Layout>
  )
}
