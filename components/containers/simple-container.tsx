import { chakra, Flex } from '@chakra-ui/react'

const SimpleContainer = chakra(Flex, {
  baseStyle: {
    bgColor: 'cardbg',
    p: 6,
    rounded: 'lg',
    boxShadow: 'base',
    mb: 6,
    width: 'full'
  }
})

export default SimpleContainer
