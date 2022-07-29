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
  const description = twitter?.twitterData.description
  return (
    <Box width="full" px={4} pt={2}>
      <Text
        fontSize=".8rem"
        fontFamily="manrope"
        fontWeight="300"
        letterSpacing="wide"
      >
        {description === undefined ? 'Full-Stack Developer.' : description}
      </Text>
      <Text
        fontWeight="300"
        fontFamily="manrope"
        fontSize=".7rem"
        letterSpacing="wider"
      >
        {followings === 0 ? null : (
          <>
            <CountUp end={followings || 0} style={{ fontWeight: '600' }} />{' '}
            Following{' '}
            <CountUp end={followers || 0} style={{ fontWeight: '600' }} />{' '}
            Followers
          </>
        )}
      </Text>
    </Box>
  )
}

export default TwitterCardBottom
