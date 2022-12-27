import { Inter } from '@next/font/google'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>CGPA Calculator</title>
        <meta name="description" content="Created by sajid" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <div className={styles.thirteen}>
            CGPA Calculator
          </div>
        </div>

        <div>
          <Link href={'/calculate'}>
            <h2 className={inter.className}>
              Calculate <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Save your cgpa details in your device
            </p>
          </Link>
        </div>
      </main>
    </>
  )
}
