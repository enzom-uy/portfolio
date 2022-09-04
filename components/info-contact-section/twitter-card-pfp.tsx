import { Flex, Spinner, SkeletonCircle } from '@chakra-ui/react'
import NextChakraImage from 'components/next-chakra-image'
import React from 'react'
import pfp from '/public/assets/pfp.jpg'

interface Props {
  profilePicture: string | undefined
  isLoading: boolean
}

const TwitterCardPfp: React.FC<Props> = ({ profilePicture, isLoading }) => {
  const gotProfilePicture = !isLoading && profilePicture !== undefined
  const noProfilePicture = !isLoading && profilePicture === undefined
  return (
    <Flex
      width="2.7rem"
      rounded="full"
      alignItems="center"
      justifyContent="center"
    >
      <SkeletonCircle width="100%" height="48px" isLoaded={!isLoading}>
        {gotProfilePicture ? (
          <NextChakraImage
            src={profilePicture}
            width={48}
            height={48}
            rounded="full"
          />
        ) : (
          noProfilePicture && <NextChakraImage src={pfp} rounded="full" />
        )}
      </SkeletonCircle>
    </Flex>
  )
}

export default TwitterCardPfp
