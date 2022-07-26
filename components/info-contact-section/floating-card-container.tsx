import { chakra, Flex } from '@chakra-ui/react'
import { floatingIcon } from 'lib/animations'

const FloatingCardContainer = chakra(Flex, {
  shouldForwardProp: (prop) => ![''].includes(prop),
  baseStyle: {
    borderRadius: '10px',
    backdropFilter: 'blur(7px)',
    animation: `${floatingIcon} `,
    boxShadow: 'md',
    display: 'inline-block'
  }
})

export default FloatingCardContainer
