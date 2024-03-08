import Link from 'next/link'
import Image from 'next/image'

import styles from './Layout.module.css'

export default function Layout({ title, img, children }) {
  return (
    <div className={styles.article}>
      <Link href="/">
        <p>&larr; Back</p>
      </Link>
      <Image
        src={img}
        style={{ borderRadius: '5px', width: '100%', height: 'auto' }}
        alt='react-graphql-node-e2e-testing'
      />
      <h1 className={styles.title}>
        {title}
      </h1>
      {children}
    </div>
  )
}
