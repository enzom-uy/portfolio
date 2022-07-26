import React from 'react'
import Main from 'components/layouts/main'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import BriefBioCard from 'components/bio-section/brief-bio-card'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Enzo Muñoz - Homepage</title>
        <meta name="description" content="Enzo's Homepage" />
      </Head>
      <Box as="section">
        <BriefBioCard />
      </Box>
    </>
  )
}

export default Home
