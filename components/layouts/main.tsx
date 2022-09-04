import { Container } from '@chakra-ui/react'
import { MotionBox } from 'components/motion/motion-box'
import useViewport from 'hooks/useViewport'
import Head from 'next/head'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Main: React.FC<Props> = ({ children }) => {
  const isMobile = useViewport()
  return (
    <MotionBox
      initial={
        !isMobile && {
          opacity: 0,
          translateY: '5%'
        }
      }
      animate={
        !isMobile && {
          translateY: '0%',
          opacity: 1
        }
      }
      transition={
        isMobile
          ? undefined
          : {
              duration: '.8',
              delay: '.3'
            }
      }
    >
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Enzo Muñoz" />
        <meta name="author" content="enzom-uy" />
      </Head>

      <Container
        as="main"
        pt={8}
        maxW="40rem"
        display="flex"
        justifyContent="center"
      >
        {children}
      </Container>
    </MotionBox>
  )
}

export default Main
