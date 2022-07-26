import { Icon, useColorModeValue } from '@chakra-ui/react'
import { floatingIcon } from 'lib/animations'
import React from 'react'
import { IconType } from 'react-icons'
import FloatingCardContainer from './floating-card-container'

interface Props {
  icon: IconType
  top?: number | string
  bottom?: number | string
  left?: number | string
  right?: number | string
  animationSpeed?: string
  href?: string
}

const IconCard: React.FC<Props> = ({
  icon,
  top,
  bottom,
  left,
  right,
  animationSpeed,
  href
}) => {
  return (
    <FloatingCardContainer
      position="absolute"
      as="a"
      top={top}
      bottom={bottom}
      left={left}
      right={right}
      bgColor={useColorModeValue('icon-card-bg-light', 'icon-card-bg-dark')}
      px={2}
      pt={3}
      pb={2}
      alignItems="center"
      justifyContent="center"
      animation={`${floatingIcon} ${animationSpeed} ease-in-out infinite`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <Icon as={icon} fontSize="2rem" zIndex={2} />
    </FloatingCardContainer>
  )
}

export default IconCard
