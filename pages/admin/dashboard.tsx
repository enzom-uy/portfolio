import { chakra, Flex } from '@chakra-ui/react'
import Editor from 'components/editor/editor'
import { getCookie } from 'cookies-next'
import { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'

const ChakraLink = chakra('a')

const Dashboard: NextPage<{ isAdmin: boolean }> = ({ isAdmin }) => {
  return (
    <Flex gap={4}>
      <Link href="/admin/post">
        <ChakraLink
          bgColor="blue"
          px={8}
          py={4}
          fontSize="1.5rem"
          fontWeight="semibold"
          rounded="lg"
          cursor="pointer"
          _hover={{ bgColor: 'blue-hover' }}
          transitionProperty="all"
          transitionDuration="normal"
          color="whiteAlpha.900"
        >
          New post
        </ChakraLink>
      </Link>

      <Link href="/admin/work">
        <ChakraLink
          bgColor="blue"
          px={8}
          py={4}
          fontSize="1.5rem"
          fontWeight="semibold"
          rounded="lg"
          cursor="pointer"
          _hover={{ bgColor: 'blue-hover' }}
          transitionProperty="all"
          transitionDuration="normal"
          whiteSpace="nowrap"
          color="whiteAlpha.900"
        >
          New work
        </ChakraLink>
      </Link>
    </Flex>
  )
}

export default Dashboard

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const isAdmin = getCookie('user', { req, res })
  console.log(isAdmin)
  if (!isAdmin) {
    return {
      redirect: {
        permanent: false,
        destination: '/'
      }
    }
  }
  return {
    props: {
      isAdmin: true
    }
  }
}
