import { Icon, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { IconType } from 'react-icons'
import FloatingCardContainer from './floating-card-container'

interface Props {
  icon: IconType
  top?: number | string
  bottom?: number | string
  left?: number | string
  right?: number | string
}

const IconCard: React.FC<Props> = ({ icon, top, bottom, left, right }) => {
  return (
    <FloatingCardContainer
      position="absolute"
      top={top}
      bottom={bottom}
      left={left}
      right={right}
      bgColor={useColorModeValue('icon-card-bg-light', 'icon-card-bg-dark')}
      px={2}
      py={3}
      alignItems="center"
      justifyContent="center"
    >
      <Icon as={icon} fontSize="2rem" zIndex={2} />
    </FloatingCardContainer>
  )
}

export default IconCard
