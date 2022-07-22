import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

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
  white: 'rgba(255, 255, 255, 0.25)',
  cardbg: 'rgba(37, 35, 35, 0.15)',
  'icon-card-bg-dark': 'rgba(29, 29, 29, 0.6)',
  'icon-card-bg-light': 'hsla(0, 0%, 100%, 0.7)'
}

const boxShadows = {
  card: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )'
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

const fontSizes = {
  heading: '3.5rem'
}

export const theme = extendTheme({
  styles,
  config,
  colors,
  fonts,
  breakpoints,
  boxShadows,
  fontSizes
})

export default theme
