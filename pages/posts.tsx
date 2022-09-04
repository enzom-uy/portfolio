import { Grid } from '@chakra-ui/react'
import { Post } from 'interfaces/posts'
import { getClient } from 'lib/client'
import { GetStaticProps, NextPage } from 'next'
import { groq } from 'next-sanity'
import Head from 'next/head'
import Link from 'next/link'
import dynamic from 'next/dynamic'
const PostCard = dynamic(() => import('components/post/post-card'))

const Posts: NextPage<{ posts: Post[] }> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Enzo Muñoz - Posts</title>
        <meta name="description" content="Enzo's Posts" />
      </Head>

      <Grid templateColumns="1fr 1fr" gap={4}>
        {posts.length === 0
          ? 'Aún no hay posts publicados 😢'
          : posts.map((post) => (
              <Link key={post._id} href={`/posts/${post.slug?.current}`}>
                <a>
                  <PostCard
                    categories={post.categories}
                    body={post.body}
                    title={post.title}
                    mainImage={post.mainImage}
                  />
                </a>
              </Link>
            ))}
      </Grid>
    </>
  )
}

export default Posts

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

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const post = await getClient('preview').fetch(postQuery)

  return {
    props: {
      preview,
      posts: post
    },
    revalidate: 60
  }
}
