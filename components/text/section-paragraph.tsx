import { chakra, Text } from '@chakra-ui/react'

const SectionParagraph = chakra(Text, {
  baseStyle: {
    fontSize: '1rem',
    textAlign: 'justify',
    textIndent: '1em',
    mb: 2
  }
})

export default SectionParagraph
