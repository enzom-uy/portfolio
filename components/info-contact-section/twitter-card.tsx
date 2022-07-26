import { Flex, useColorModeValue, Text, Box } from '@chakra-ui/react'
import useTwitter from 'hooks/useTwitter'
import { floatingIcon } from 'lib/animations'
import React from 'react'
import CountUp from 'react-countup'
import FloatingCardContainer from './floating-card-container'
import TwitterCardBottom from './twitter-card-bottom'
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
        <TwitterCardBottom twitter={twitter} />
      </Flex>
    </FloatingCardContainer>
  )
}

export default TwitterCard
