import { Flex, Icon, Link, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { HiOutlineDocument } from 'react-icons/hi'

const FloatingResumee: React.FC = () => {
  const [showText, setShowText] = useState(false)
  return (
    <Link
      display="flex"
      position="fixed"
      right="10"
      bottom="5"
      alignItems="center"
      justifyContent="center"
      width="20px"
      overflow="hidden"
      transitionProperty="all"
      transitionDuration="0.6s"
      rounded="full"
      bgColor="rgba(255, 255, 255, 0.25)"
      px={5}
      py={2}
      _hover={{ width: '90px', paddingX: 59 }}
      onMouseOver={() => setShowText(true)}
      onMouseLeave={() => setShowText(false)}
      cursor="pointer"
      href="https://drive.google.com/drive/folders/1If0xEHVFNn0A_XLXCHzGM8nlgIHTwVcB?usp=sharing"
      target="_blank"
    >
      <Icon as={HiOutlineDocument} width="25px" height="25px" />{' '}
      <Text
        opacity={showText ? 1 : 0}
        width={showText ? '20' : 0}
        height="auto"
        whiteSpace="nowrap"
        transitionProperty="all"
        transitionDuration="1s"
      >
        {showText && 'Resumee'}
      </Text>
    </Link>
  )
}

export default FloatingResumee
