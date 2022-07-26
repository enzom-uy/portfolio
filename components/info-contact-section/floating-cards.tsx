import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import IconCard from './icon-card'
import TwitterCard from './twitter-card'

const FloatingCards: React.FC = () => {
  return (
    <>
      <IconCard
        icon={FaGithub}
        right="48.5%"
        top="60px"
        animationSpeed="3.7s"
        href="https://github.com/enzom-uy/"
      />
      <TwitterCard top={''} right={'10%'} />
      <IconCard
        icon={FaLinkedin}
        right="2%"
        top="200px"
        animationSpeed="3.3s"
        href="https://www.linkedin.com/in/enzomdev/"
      />
    </>
  )
}

export default FloatingCards
