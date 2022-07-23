import { Flex, Spinner } from '@chakra-ui/react'
import NextChakraImage from 'components/next-chakra-image'
import React from 'react'
import pfp from '/public/assets/pfp.jpg'

interface Props {
  profilePicture: string | undefined
  error: {} | undefined
}

const TwitterCardPfp: React.FC<Props> = ({ profilePicture, error }) => {
  return (
    <Flex
      width={12}
      height={12}
      rounded="full"
      alignItems="center"
      justifyContent="center"
    >
      {profilePicture ? (
        <NextChakraImage
          src={profilePicture}
          width={48}
          height={48}
          rounded="full"
        />
      ) : error ? (
        <NextChakraImage src={pfp} rounded="full" />
      ) : (
        <Spinner size="lg" speed="1s" />
      )}
    </Flex>
  )
}

export default TwitterCardPfp
