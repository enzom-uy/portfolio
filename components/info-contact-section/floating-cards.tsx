import React from 'react'
import { FaGithub } from 'react-icons/fa'
import IconCard from './icon-card'
import TwitterCard from './twitter-card'

const FloatingCards: React.FC = () => {
  return (
    <>
      <IconCard icon={FaGithub} right="43%" top="30px" />
      <TwitterCard top={''} right={'0'} />
    </>
  )
}

export default FloatingCards
