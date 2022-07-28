import { Link } from '@chakra-ui/react'
import React from 'react'

const FollowingButton: React.FC = () => {
  return (
    <>
      <Link
        bgColor="blue"
        width="auto"
        px={5}
        py={0.5}
        rounded="lg"
        _hover={{ bgColor: 'blue-hover' }}
        transitionDuration="0.3s"
        color="whiteAlpha.900"
        fontFamily="heading"
        fontWeight="400"
        letterSpacing="tighter"
        href="https://twitter.com/enzom_uy/"
        target="_blank"
      >
        Follow
      </Link>
    </>
  )
}

export default FollowingButton
