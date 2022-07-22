import Main from 'components/layouts/main'
import useTwitter from 'hooks/useTwitter'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  // const { twitter } = useTwitter()
  return (
    <Main>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Main>
  )
}

export default Home
