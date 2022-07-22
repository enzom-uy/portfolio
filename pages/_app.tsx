import type { AppProps } from 'next/app'
import {
  ChakraProvider,
  ColorModeScript,
  Container,
  ScaleFade
} from '@chakra-ui/react'
import theme from '../theme/chakra-theme'
import Layout from '../components/layouts/main'
import '@fontsource/m-plus-rounded-1c/700.css'
import '@fontsource/m-plus-rounded-1c/400.css'
import '@fontsource/m-plus-rounded-1c/500.css'
import Navbar from 'components/navbar/navbar'
import Card from 'components/info-contact-section/card'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />

      <Navbar />
      <Container maxW="90ch" pt="5rem">
        <Card />
      </Container>
      <ScaleFade key={router.route} initialScale={0.9} in={true}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ScaleFade>
    </ChakraProvider>
  )
}

export default MyApp
