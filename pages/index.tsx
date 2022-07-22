import CustomNumber from 'components/animated-number/custom-number'
import Card from 'components/info-contact-section/card'
import Main from 'components/layouts/main'
import useTwitter from 'hooks/useTwitter'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  const { twitter } = useTwitter()
  return (
    <Main>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Card />
      <CustomNumber value={twitter?.followings} />
    </Main>
  )
}

export default Home
