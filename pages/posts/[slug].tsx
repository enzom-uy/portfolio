import { AspectRatio, chakra, Flex, Text } from '@chakra-ui/react'
import { PortableText } from '@portabletext/react'
import SimpleContainer from 'components/containers/simple-container'
import NextChakraImage from 'components/next-chakra-image'
import Category from 'components/post/category'
import { Post } from 'interfaces/posts'
import { GetStaticPaths, GetStaticProps } from 'next'
import { groq } from 'next-sanity'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { getClient } from '../../lib/client'
import { urlFor, usePreviewSubscription } from '../../lib/sanity'

const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    body,
    mainImage,
    categories[]->{
      _id,
      title
    },
    "slug": slug.current
  }
`

const Post: React.FC<{ data: { post: Post }; preview: any }> = ({
  data,
  preview
}) => {
  const { data: post } = usePreviewSubscription(postQuery, {
    params: { slug: data?.post?.slug },
    initialData: data?.post,
    enabled: preview && data?.post?.slug
  })

  if (!post) {
    return <ErrorPage statusCode={404} />
  }

  const { title, mainImage, body, categories } = post as Post

  return (
    <>
      <Head>
        <title>{title} - Enzo Muñoz</title>
      </Head>
      <SimpleContainer as="article" display="flex" flexDir="column" gap={4}>
        <Flex alignItems="flex-end" gap={4}>
          <Text
            as="h2"
            fontSize="2rem"
            textDecorationLine="underline"
            textDecorationColor="red.900"
            textDecorationThickness="4px"
            textUnderlineOffset="10px"
          >
            {title}
          </Text>
          {categories?.map((cat) => (
            <Category key={cat.title} cat={cat} />
          ))}
        </Flex>
        {mainImage && (
          <AspectRatio ratio={16 / 9}>
            <NextChakraImage
              src={urlFor(mainImage).url()}
              width="100%"
              height="100%"
              layout="fill"
              objectFit="cover"
              rounded="lg"
              priority
            />
          </AspectRatio>
        )}
        <PortableText value={body} />
      </SimpleContainer>
    </>
  )
}

export default Post

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false
}) => {
  const post = await getClient('preview').fetch(postQuery, {
    slug: params?.slug
  })

  return {
    props: {
      preview,
      data: { post }
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getClient('preview').fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug: any) => ({ params: { slug } })),
    fallback: false
  }
}
