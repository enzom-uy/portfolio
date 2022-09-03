import { Flex } from '@chakra-ui/react'
import Editor from 'components/editor/editor'
import { NextPage } from 'next'

const Post: NextPage = () => {
  return (
    <Flex>
      <Editor />
    </Flex>
  )
}

export default Post
