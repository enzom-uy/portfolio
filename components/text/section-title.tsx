import { chakra, Text } from '@chakra-ui/react'

const SectionTitle = chakra(Text, {
  baseStyle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    textDecoration: 'underline',
    textUnderlineOffset: '6px',
    textDecorationThickness: '4px',
    mb: 4
  }
})

export default SectionTitle
