import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import CountUp from 'react-countup'
import { Twitter } from 'interfaces/twitter'

interface Props {
  twitter: Twitter | undefined
  followings: number | undefined
  followers: number | undefined
}

const TwitterCardBottom: React.FC<Props> = ({
  twitter,
  followings,
  followers
}) => {
  return (
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
        <CountUp end={followings || 0} /> Following{' '}
        <CountUp end={followers || 0} /> Followers
      </Text>
    </Box>
  )
}

export default TwitterCardBottom
