import { Flex } from '@chakra-ui/react'
import { NextPage } from 'next'
import Head from 'next/head'

const Posts: NextPage = () => {
  return (
    <>
      <Head>
        <title>Enzo Muñoz - Posts</title>
        <meta name="description" content="Enzo's Posts" />
      </Head>

      <Flex>Posts</Flex>
    </>
  )
}

export default Posts
