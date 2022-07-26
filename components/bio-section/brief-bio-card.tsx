import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  useBreakpointValue
} from '@chakra-ui/react'
import React from 'react'
import me from 'public/assets/me.jpeg'
import Image from 'next/image'

const BriefBioCard = () => {
  const isMobile = useBreakpointValue({ base: true, md: false })
  return (
    <Flex
      as={Container}
      justifyContent="space-between"
      flexDir={isMobile ? 'column' : 'row'}
      alignItems="center"
      gap={isMobile ? 6 : 0}
      bgColor="cardbg"
      p={6}
      rounded="lg"
      boxShadow="base"
    >
      <Box whiteSpace="nowrap">
        <Heading fontFamily="heading" letterSpacing="wide">
          Enzo Muñoz
        </Heading>
        <Text letterSpacing="wider" fontFamily="heading">
          Full-Stack Developer.
        </Text>
      </Box>
      <Box width={24} rounded="full">
        <Image
          src={me}
          alt="Picture of Enzo Muñoz"
          style={{ borderRadius: '100%' }}
        />
      </Box>
    </Flex>
  )
}

export default BriefBioCard
