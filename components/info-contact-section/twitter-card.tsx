import { Flex, useColorModeValue, Text, Box } from '@chakra-ui/react'
import FollowingButton from 'components/buttons/following-button'
import useTwitter from 'hooks/useTwitter'
import React from 'react'
import FloatingCardContainer from './floating-card-container'
import TwitterCardPfp from './twitter-card-pfp'

interface Props {
  top?: string
  right?: string
  bottom?: string
  left?: string
}

const TwitterCard: React.FC<Props> = ({ top, right, bottom, left }) => {
  const { twitter, error } = useTwitter()
  const profilePicture = twitter?.twitterData.profile_image_url
  const twitterName = twitter?.twitterData.username
  return (
    <FloatingCardContainer
      bgColor={useColorModeValue('icon-card-bg-light', 'icon-card-bg-dark')}
      width="280px"
      p={4}
      top={top}
      right={right}
      bottom={bottom}
      left={left}
      position="absolute"
      fontFamily="heading"
    >
      <Flex alignItems="center" justifyContent="space-between" w="full">
        <Flex alignItems="center" gap={3}>
          <TwitterCardPfp profilePicture={profilePicture} error={error} />
          <Box>
            <Text fontWeight="600" letterSpacing="tight">
              {twitterName ? twitterName : 'enzom_uy'}
            </Text>
            <Text fontSize=".7rem" color="gray">
              @enzom_uy
            </Text>
          </Box>
        </Flex>
        <FollowingButton />
      </Flex>
    </FloatingCardContainer>
  )
}

export default TwitterCard
