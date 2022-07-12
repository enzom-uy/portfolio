import {extendTheme, type ThemeConfig} from '@chakra-ui/react'

const theme = {
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false
  }
}

export default extendTheme(theme)
