import {
  ChakraProvider,
  ColorModeScript,
  Container,
  ScaleFade
} from '@chakra-ui/react'
import FloatingResumee from 'components/FloatingResumee'
import Card from 'components/info-contact-section/card'
import Navbar from 'components/navbar/navbar'
import type { AppProps } from 'next/app'
import Layout from '../components/layouts/main'
import theme from '../theme/chakra-theme'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />

      <Navbar />
      <Container pt="5rem" maxW="45rem">
        <Card />
      </Container>
      <ScaleFade key={router.route} initialScale={0.9} in={true}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ScaleFade>
      <FloatingResumee />
    </ChakraProvider>
  )
}

export default MyApp
