import { Flex, Icon, useColorModeValue, keyframes } from '@chakra-ui/react'
import React from 'react'
import { IconType } from 'react-icons'

interface Props {
  icon: IconType
  top?: number | string
  bottom?: number | string
  left?: number | string
  right?: number | string
}

const floatingIcon = keyframes`
  0% {transform: translateY(0px);}
  50% {transform: translateY(-18px);}
  100% {transform: translateY(0px);}
`

const IconCard: React.FC<Props> = ({ icon, top, bottom, left, right }) => {
  const iconAnimation = `${floatingIcon} 4s ease-in-out infinite`
  return (
    <Flex
      position="absolute"
      top={top}
      bottom={bottom}
      left={left}
      right={right}
      bgColor={useColorModeValue('icon-card-bg-light', 'icon-card-bg-dark')}
      px={2}
      py={3}
      borderRadius="10px"
      alignItems="center"
      justifyContent="center"
      backdropFilter="blur(7px)"
      animation={iconAnimation}
    >
      <Icon as={icon} fontSize="2rem" zIndex={2} />
    </Flex>
  )
}

export default IconCard
