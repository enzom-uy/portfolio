import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import BioSection from 'components/bio-section/bio-section'
import SkillsSection from 'components/skills-section/skills-section'
import ContactSection from 'components/contact-section/contact-section'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Homepage - Enzo Muñoz</title>
        <meta name="description" content="Enzo's Homepage" />
      </Head>
      <Box as="section">
        <BioSection />
        <SkillsSection />
        <ContactSection />
      </Box>
    </>
  )
}

export default Home
