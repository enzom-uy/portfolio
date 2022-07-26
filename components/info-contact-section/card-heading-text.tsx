import React from 'react'
import { Flex, Text, useColorModeValue } from '@chakra-ui/react'

interface Props {
  isMobile: boolean | undefined
}

const CardHeadingText: React.FC<Props> = ({ isMobile }) => {
  return (
    <>
      <Flex>
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
      <Text
        fontFamily="heading"
        fontSize="1.1rem"
        textAlign={isMobile ? 'center' : undefined}
      >
        I&apos;m a Full-stack Developer based in Uruguay.
      </Text>
    </>
  )
}

export default CardHeadingText
