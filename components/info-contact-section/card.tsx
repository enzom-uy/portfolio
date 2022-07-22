import { Flex } from '@chakra-ui/react'
import SVGRing from 'components/svgs/ring'
import React from 'react'
import { FaGithub } from 'react-icons/fa'
import CardHeadingText from './card-heading-text'
import IconCard from './icon-card'

const Card: React.FC = () => {
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
        <IconCard icon={FaGithub} right="30%" top="30px" />
      </Flex>
    </>
  )
}

export default Card
