import { Box, Heading, Text } from '@chakra-ui/react'
import me from 'public/assets/me.jpeg'
import Image from 'next/image'
import SimpleContainer from 'components/containers/simple-container'
import useViewport from 'hooks/useViewport'

const BriefBioCard = () => {
  const { isMobile } = useViewport()
  return (
    <SimpleContainer
      justifyContent="space-between"
      flexDir={isMobile ? 'column' : 'row'}
      alignItems="center"
      gap={isMobile ? 6 : 0}
    >
      <Box whiteSpace="nowrap">
        <Heading fontFamily="heading" letterSpacing="wide">
          Enzo Muñoz
        </Heading>
        <Text letterSpacing="wider" fontFamily="heading">
          Full-Stack Developer.
        </Text>
      </Box>
      <Image
        src={me}
        height={96}
        width={96}
        alt="Picture of Enzo Muñoz"
        style={{ borderRadius: '100%' }}
      />
    </SimpleContainer>
  )
}

export default BriefBioCard
