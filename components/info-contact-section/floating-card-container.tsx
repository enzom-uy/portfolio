import { chakra, Flex } from '@chakra-ui/react'
import { iconAnimation } from 'lib/animations'

const FloatingCardContainer = chakra(Flex, {
  shouldForwardProp: (prop) => ![''].includes(prop),
  baseStyle: {
    borderRadius: '10px',
    backdropFilter: 'blur(7px)',
    animation: iconAnimation,
    boxShadow: 'md'
  }
})

export default FloatingCardContainer
