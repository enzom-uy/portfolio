import { Grid } from '@chakra-ui/react'
import { getClient } from 'lib/client'
import { GetStaticProps, NextPage } from 'next'
import { groq } from 'next-sanity'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { Work } from '../interfaces/works'

const Works: NextPage<{ works: Work[] }> = ({ works }) => {
  return (
    <>
      <Head>
        <title>Enzo Muñoz - Works</title>
        <meta name="description" content="Enzo's Works" />
      </Head>

      <Grid templateColumns="1fr 1fr" gap={4}>
        {works.length === 0
          ? 'There are no projects yet 😢.'
          : works.map((work) => (
              <Link key={work._id} href={`/works/${work.slug?.current}`}>
                <a>Click me</a>
              </Link>
            ))}
      </Grid>
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
  const work = await getClient('preview').fetch(worksQuery)

  return {
    props: {
      works: work
    },
    revalidate: 60
  }
}
