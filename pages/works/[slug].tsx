import { AspectRatio, Flex, Link, Tag, Text } from '@chakra-ui/react'
import { PortableText } from '@portabletext/react'
import SimpleContainer from 'components/containers/simple-container'
import NextChakraImage from 'components/next-chakra-image'
import PortableTextContainer from 'components/portable-text-container'
import SectionTitle from 'components/text/section-title'
import { Work } from 'interfaces/works'
import { GetStaticPaths, GetStaticProps } from 'next'
import { groq } from 'next-sanity'
import ErrorPage from 'next/error'
import { getClient } from '../../lib/client'
import { urlFor, usePreviewSubscription } from '../../lib/sanity'
import Head from 'next/head'

const query = groq`
  *[_type == "work" && slug.current == $slug][0] {
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
    "slug": slug.current
  }
`

const Work: React.FC<{ data: { work: Work }; preview: any }> = ({
  data,
  preview
}) => {
  const { data: work } = usePreviewSubscription(query, {
    params: { slug: data?.work?.slug },
    initialData: data?.work,
    enabled: preview && data?.work?.slug
  })

  if (!work) {
    return <ErrorPage statusCode={404} />
  }

  const { title, mainImage, body, stack, website, repository } = work as Work

  return (
    <>
      <Head>
        <title>{title} - Enzo Muñoz</title>
      </Head>
      <SimpleContainer
        as="article"
        display="flex"
        flexDir="column"
        gap={4}
        minW="300px"
        width="600px"
      >
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
        <SimpleContainer flexDir="column" m={0}>
          <SectionTitle color="teal.700">Stack</SectionTitle>
          <Flex gap={4} wrap="wrap">
            {stack?.map((tech) => (
              <Tag
                whiteSpace="nowrap"
                key={tech.title}
                fontSize="1.2rem"
                colorScheme="teal"
                px={2}
                py={1}
              >
                {tech.title}
              </Tag>
            ))}
          </Flex>
        </SimpleContainer>
        <SimpleContainer flexDir="column" m={0}>
          <SectionTitle color="red.700">Website</SectionTitle>
          <Link
            href={website}
            target="_blank"
            fontSize="1.2rem"
            letterSpacing="wide"
          >
            {website}
          </Link>
        </SimpleContainer>
        <SimpleContainer flexDir="column">
          <SectionTitle color="green.800">Repository</SectionTitle>
          <Link
            href={repository}
            target="_blank"
            fontSize="1.2rem"
            letterSpacing="wide"
          >
            {repository}
          </Link>
        </SimpleContainer>
        <PortableTextContainer>
          <PortableText value={body} />
        </PortableTextContainer>
      </SimpleContainer>
    </>
  )
}

export default Work

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false
}) => {
  const work = await getClient('production').fetch(query, {
    slug: params?.slug
  })

  return {
    props: {
      preview,
      data: { work }
    },
    revalidate: 10
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getClient('production').fetch(
    groq`*[_type == "work" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug: any) => ({ params: { slug } })),
    fallback: 'blocking'
  }
}
