import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import IconCard from './icon-card'
import TwitterCard from './twitter-card'

const FloatingCards: React.FC = () => {
  return (
    <>
      <IconCard icon={FaGithub} right="47%" top="60px" animationSpeed="3.7s" />
      <TwitterCard top={''} right={'10%'} />
      <IconCard
        icon={FaLinkedin}
        right="3%"
        top="200px"
        animationSpeed="3.3s"
      />
    </>
  )
}

export default FloatingCards
