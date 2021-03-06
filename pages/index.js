import { useRouter } from 'next/dist/client/router'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

const Home = () => {
  let router = useRouter()

  let greeting =
    router.locale === 'en-US'
      ? 'Hello World'
      : router.locale === 'de'
        ? 'Hallo Welt'
        : router.locale === 'fr'
          ? 'Bonjour le monde'
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

export default Home