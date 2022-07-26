import { Flex, useColorModeValue, Text, Box } from '@chakra-ui/react'
import useTwitter from 'hooks/useTwitter'
import { floatingIcon } from 'lib/animations'
import React from 'react'
import CountUp from 'react-countup'
import FloatingCardContainer from './floating-card-container'
import TwitterCardTop from './twitter-card-top'

interface Props {
  top?: string
  right?: string
  bottom?: string
  left?: string
}

const TwitterCard: React.FC<Props> = ({ top, right, bottom, left }) => {
  const { twitter, error } = useTwitter()
  const followings = twitter?.followings
  const followers = twitter?.followers

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
      animation={`${floatingIcon} 4s ease-in-out infinite`}
      style={{ animationDelay: '150ms' }}
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        w="full"
        flexDir="column"
      >
        <TwitterCardTop twitter={twitter} error={error} />
        <Box width="full" px={4} pt={2}>
          <Text
            fontSize=".8rem"
            fontFamily="manrope"
            fontWeight="300"
            letterSpacing="wide"
          >
            {twitter?.twitterData.description
              ? twitter.twitterData.description
              : 'Full-Stack Developer.'}
          </Text>
          <Text
            fontWeight="300"
            fontFamily="manrope"
            fontSize=".7rem"
            letterSpacing="wider"
          >
            {followings || 0} Following <CountUp end={followers || 0} />{' '}
            Followers
          </Text>
        </Box>
      </Flex>
    </FloatingCardContainer>
  )
}

export default TwitterCard
