import React from 'react'
import { Flex, Text, useColorModeValue } from '@chakra-ui/react'

const CardHeadingText: React.FC = () => {
  return (
    <>
      <Flex width="100%">
        <Text
          fontSize="heading"
          fontFamily="heading"
          letterSpacing="wide"
          fontWeight="500"
        >
          Hello
        </Text>
        <Text
          fontSize="heading"
          fontFamily="heading"
          color={useColorModeValue('purple', 'orange')}
        >
          ,
        </Text>
      </Flex>
      <Flex>
        <Text
          letterSpacing="wide"
          fontSize="heading"
          fontFamily="heading"
          fontWeight="500"
        >
          I
        </Text>
        <Text
          color={useColorModeValue('purple', 'orange')}
          fontSize="heading"
          fontFamily="heading"
        >
          &apos;
        </Text>

        <Text
          letterSpacing="wide"
          fontSize="heading"
          fontFamily="heading"
          fontWeight="500"
        >
          m Enzo
        </Text>

        <Text
          fontSize="heading"
          fontFamily="heading"
          color={useColorModeValue('purple', 'orange')}
        >
          .
        </Text>
      </Flex>
      <Text fontFamily="heading" fontSize="1.1rem">
        I&apos;m a Full-stack Developer based in Uruguay.
      </Text>
    </>
  )
}

export default CardHeadingText
