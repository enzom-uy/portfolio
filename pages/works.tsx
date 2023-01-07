import { Grid } from '@chakra-ui/react'
import SimpleContainer from 'components/containers/simple-container'
import SectionTitle from 'components/text/section-title'
import { getClient } from 'lib/client'
import { GetStaticProps, NextPage } from 'next'
import { groq } from 'next-sanity'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { Work } from '../interfaces/works'
const ArticleCard = dynamic(() => import('components/ArticleCard'))

const Works: NextPage<{ works: Work[] }> = ({ works }) => {
  return (
    <>
      <Head>
        <title>Works - Enzo Muñoz</title>
        <meta name="description" content="Enzo's Works" />
      </Head>

      <SimpleContainer flexDir="column" gap={4}>
        <SectionTitle color="red.600">Works</SectionTitle>
        <Grid templateColumns="100%" gap={4} width="full">
          {works.length === 0
            ? 'There are no projects yet 😢.'
            : works.map((work) => (
                <Link key={work._id} href={`/works/${work.slug?.current}`}>
                  <a>
                    <ArticleCard
                      mainImage={work.mainImage}
                      title={work.title}
                      body={work.body}
                      website={work.website}
                      stack={work.stack}
                    />
                  </a>
                </Link>
              ))}
        </Grid>
      </SimpleContainer>
    </>
  )
}

export default Works

const worksQuery = groq`
  *[_type == "work"] {
    _id,
    title,
    body,
    mainImage,
    stack[]->{
      _id,
      title
    },
    website,
    repository,
    slug
  }
`

export const getStaticProps: GetStaticProps = async () => {
  const work = await getClient('production').fetch(worksQuery)

  return {
    props: {
      works: work
    },
    revalidate: 10
  }
}
