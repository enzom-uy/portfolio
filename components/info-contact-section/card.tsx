import { useBreakpointValue } from '@chakra-ui/react'
import SVGRing from 'components/svgs/ring'
import React from 'react'
import CardHeadingText from './card-heading-text'
import FloatingCards from './floating-cards'
import { MotionBox } from 'components/motion/motion-box'

const Card: React.FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false })
  return (
    <>
      <MotionBox
        display="flex"
        bgColor="cardbg"
        minW="230px"
        w="100%"
        h="17rem"
        boxShadow="0 2px 32px 0 rgba( 255, 38, 135, 0.10 )"
        backdropFilter="blur(2.5px)"
        borderRadius="10px"
        border="1px solid rgba( 255, 255, 255, 0.02 )"
        flexDir="column"
        justifyContent="center"
        alignItems={isMobile ? 'center' : ''}
        position="relative"
        pl={isMobile ? 0 : 8}
        initial={{
          opacity: 0,
          translateY: '100%'
        }}
        animate={{
          translateY: '0%',
          opacity: 1
        }}
        transition={{
          duration: '.8'
        }}
      >
        <SVGRing color={'#E21E1E'} scale="0.6" left="12%" top="2%" blur="5px" />

        <SVGRing color={'#00D5BF'} scale="1" right="7%" top="73%" blur="10px" />
        <SVGRing
          color={'#E21E1E'}
          scale="0.3"
          right="30%"
          top="34%"
          blur="2.7px"
        />
        <CardHeadingText isMobile={isMobile} />
        {isMobile ? null : <FloatingCards />}
      </MotionBox>
    </>
  )
}

export default Card
