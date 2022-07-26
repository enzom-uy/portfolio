import { Flex, Box, Text } from '@chakra-ui/react'
import FollowingButton from 'components/buttons/following-button'
import { Twitter } from 'interfaces/twitter'
import React from 'react'
import TwitterCardPfp from './twitter-card-pfp'

interface Props {
  twitter: Twitter | undefined
  error: {}
}

const TwitterCardTop: React.FC<Props> = ({ twitter, error }) => {
  return (
    <>
      <Flex alignItems="center" gap={3}>
        <TwitterCardPfp
          profilePicture={twitter?.twitterData.profile_image_url}
          error={error}
        />
        <Box>
          <Text fontWeight="600" letterSpacing="tight">
            {twitter?.twitterData.name && twitter.twitterData.name}
          </Text>

          <Text fontSize=".7rem" color="gray">
            {twitter?.twitterData.username &&
              `@${twitter?.twitterData.username}`}
          </Text>
        </Box>
        <FollowingButton />
      </Flex>
    </>
  )
}

export default TwitterCardTop
