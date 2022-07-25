import { chakra } from '@chakra-ui/react'
import Image from 'next/image'

const NextChakraImage = chakra(Image, {
  shouldForwardProp: (prop) => ![''].includes(prop)
})

export default NextChakraImage
