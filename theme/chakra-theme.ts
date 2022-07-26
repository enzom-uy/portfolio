import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode('#F1E6DB', '#0F0E0E')(props),
      fontFamily: 'Manrope'
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
  'icon-card-bg-light': 'hsla(0, 0%, 100%, 0.7)',
  blue: '#0e6fe0',
  'blue-hover': '#055bbf'
}

const boxShadows = {
  card: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )'
}

const fonts = {
  heading: "'M PLUS Rounded 1c'",
  manrope: "'Manrope', sans-serif"
}

const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '1100px',
  xl: '1400px',
  '2xl': '1536px'
}

const fontSizes = {
  heading: 'clamp(2.5rem, 7vw, 3rem)'
}

const sizes = {
  pfp: '50px'
}

export const theme = extendTheme({
  styles,
  config,
  colors,
  fonts,
  breakpoints,
  boxShadows,
  fontSizes,
  sizes
})

export default theme
