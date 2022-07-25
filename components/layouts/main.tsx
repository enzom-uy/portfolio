import { Container } from '@chakra-ui/react'
import Head from 'next/head'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Main: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Enzo Muñoz" />
        <meta name="author" content="enzom-uy" />
      </Head>

      <Container as="main" pt={16} maxW="90ch">
        {children}
      </Container>
    </>
  )
}

export default Main
