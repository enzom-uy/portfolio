import {extendTheme, type ThemeConfig} from '@chakra-ui/react'
import {mode} from '@chakra-ui/theme-tools'

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode('#F1E6DB', '#0F0E0E')(props)
    }
  })
}

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

const colors = {
  dark: '#0f0e0e',
  white: 'rgba(255, 255, 255, 0.25)'
}

const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '1100px',
  xl: '1400px',
  '2xl': '1536px'
}

export const theme = extendTheme({styles, config, colors, fonts, breakpoints})

export default theme
