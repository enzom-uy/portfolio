import {Box} from '@chakra-ui/react'
import Head from 'next/head'
import {ReactNode} from 'react'

interface Props {
  children: ReactNode
}

const Main: React.FC<Props> = ({children}) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Enzo's Homepage" />
        <meta name="author" content="Enzo Muñoz" />
        <meta name="author" content="enzom-uy" />
        <title>Enzo Muñoz - Homepage</title>
      </Head>

      <Box as="main" pb={8}>
        {children}
        Holaaa
      </Box>
    </>
  )
}

export default Main
