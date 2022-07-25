import React from 'react'
import Main from 'components/layouts/main'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <Main>
      <Head>
        <title>Enzo Muñoz - Homepage</title>
        <meta name="description" content="Enzo's Homepage" />
      </Head>
    </Main>
  )
}

export default Home
