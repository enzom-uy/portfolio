import { Flex, SkeletonText, useColorModeValue } from '@chakra-ui/react'
import useTwitter from 'hooks/useTwitter'
import { floatingIcon } from 'lib/animations'
import React from 'react'
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
  const { twitter, followings, followers, isLoading } = useTwitter()

  return (
    <FloatingCardContainer
      bgColor={useColorModeValue('icon-card-bg-light', 'icon-card-bg-dark')}
      width="240px"
      py={4}
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
        <TwitterCardTop twitter={twitter} isLoading={isLoading} />
        <SkeletonText
          isLoaded={!isLoading}
          noOfLines={3}
          spacing="2"
          fadeDuration={1}
          px={4}
          pt={2}
        >
          <TwitterCardBottom
            twitter={twitter}
            followings={followings}
            followers={followers}
          />
        </SkeletonText>
      </Flex>
    </FloatingCardContainer>
  )
}

export default TwitterCard
