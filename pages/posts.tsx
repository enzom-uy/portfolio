import { Grid } from '@chakra-ui/react'
import SimpleContainer from 'components/containers/simple-container'
import SectionTitle from 'components/text/section-title'
import { Post } from 'interfaces/posts'
import { getClient } from 'lib/client'
import { GetStaticProps, NextPage } from 'next'
import { groq } from 'next-sanity'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
const ArticleCard = dynamic(() => import('components/ArticleCard'))

const Posts: NextPage<{ posts: Post[] }> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Posts - Enzo Muñoz</title>
        <meta name="description" content="Enzo's Posts" />
      </Head>

      <SimpleContainer flexDir="column" gap={4}>
        <SectionTitle color="teal.700">Posts</SectionTitle>
        <Grid templateColumns="100%" gap={4}>
          {posts.length === 0
            ? 'There are no posts yet 😢.'
            : posts.map((post) => (
                <Link key={post._id} href={`/posts/${post.slug?.current}`}>
                  <a>
                    <ArticleCard
                      categories={post.categories}
                      body={post.body}
                      title={post.title}
                      mainImage={post.mainImage}
                    />
                  </a>
                </Link>
              ))}
        </Grid>
      </SimpleContainer>
    </>
  )
}

export default Posts

export const getStaticProps: GetStaticProps = async () => {
  const postQuery = groq`
  *[_type == "post"] {
    _id,
    title,
    body,
    mainImage,
    categories[]->{
      _id,
      title
    },
    slug
  }
`
  const post = await getClient('production').fetch(postQuery)

  return {
    props: {
      posts: post
    },
    revalidate: 10
  }
}
