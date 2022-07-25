import { keyframes } from '@emotion/react'

export const floatingIcon = keyframes`
  0% {transform: translateY(0px);}
  50% {transform: translateY(-18px);}
  100% {transform: translateY(0px);}
`

export const iconAnimation = `${floatingIcon} 4s ease-in-out infinite`
