import { Flex, useBreakpointValue } from '@chakra-ui/react'
import SVGRing from 'components/svgs/ring'
import React from 'react'
import CardHeadingText from './card-heading-text'
import FloatingCards from './floating-cards'

const Card: React.FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false })
  return (
    <>
      <Flex
        bgColor="cardbg"
        minW="280px"
        w="100%"
        h="20rem"
        boxShadow="0 8px 32px 0 rgba( 255, 38, 135, 0.10 )"
        backdropFilter="blur(2.5px)"
        borderRadius="10px"
        border="1px solid rgba( 255, 255, 255, 0.02 )"
        flexDir="column"
        justifyContent="center"
        alignItems={isMobile ? 'center' : undefined}
        pl={8}
      >
        <SVGRing color={'#E21E1E'} scale="0.6" left="12%" top="2%" blur="5px" />

        <SVGRing color={'#00D5BF'} scale="1" right="7%" top="73%" blur="10px" />
        <SVGRing
          color={'#E21E1E'}
          scale="0.3"
          right="30%"
          top="30%"
          blur="1.5px"
        />
        <CardHeadingText />
        {isMobile ? null : <FloatingCards />}
      </Flex>
    </>
  )
}

export default Card
