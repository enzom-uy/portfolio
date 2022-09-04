import { Flex, Box, Text } from '@chakra-ui/react'
import FollowingButton from 'components/buttons/following-button'
import { Twitter } from 'interfaces/twitter'
import React from 'react'
import TwitterCardPfp from './twitter-card-pfp'

interface Props {
  twitter: Twitter | undefined
  isLoading: boolean
}

const TwitterCardTop: React.FC<Props> = ({ twitter, isLoading }) => {
  const twitterName = twitter?.twitterData.name
  const twitterUsername = twitter?.twitterData.username
  return (
    <>
      <Flex alignItems="center" gap={3}>
        <TwitterCardPfp
          profilePicture={twitter?.twitterData.profile_image_url}
          isLoading={isLoading}
        />
        <Box>
          <Text fontWeight="600" letterSpacing="tight">
            {twitterName === undefined ? 'Enzomdev' : twitterName}
          </Text>

          <Text fontSize=".7rem" color="gray">
            {twitterUsername === undefined
              ? '@enzom_uy'
              : `@${twitterUsername}`}
          </Text>
        </Box>
        <FollowingButton />
      </Flex>
    </>
  )
}

export default TwitterCardTop
