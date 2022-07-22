import {Flex} from '@chakra-ui/react'
import React from 'react'

const Card: React.FC = () => {
  return (
    <Flex
      bgColor="cardbg"
      minW="280px"
      w="100%"
      h="20rem"
      boxShadow="0 8px 32px 0 rgba( 255, 38, 135, 0.10 )"
      backdropFilter="blur(7.5px)"
      borderRadius="10px"
      border="1px solid rgba( 255, 255, 255, 0.02 )"
    ></Flex>
  )
}

export default Card
