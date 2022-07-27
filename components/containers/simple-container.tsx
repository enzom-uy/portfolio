import { chakra, Flex } from '@chakra-ui/react'

const SimpleContainer = chakra(Flex, {
  baseStyle: {
    bgColor: 'cardbg',
    p: 6,
    rounded: 'lg',
    boxShadow: 'base',
    mb: 6
  }
})

export default SimpleContainer
