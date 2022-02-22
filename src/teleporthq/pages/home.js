import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>New Project30</title>
        <meta property="og:title" content="New Project30" />
      </Helmet>
      <div className={styles['container1']}>
        <h1>Hello :)</h1>
      </div>
    </div>
  )
}

export default Home
