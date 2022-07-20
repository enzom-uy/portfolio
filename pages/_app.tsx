import type {AppProps} from 'next/app'
import {ChakraProvider, ColorModeScript} from '@chakra-ui/react'
import theme from '../theme/chakra-theme'
import Layout from '../components/layouts/main'
import '@fontsource/m-plus-rounded-1c/700.css'

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ChakraProvider>
    )
}

export default MyApp
