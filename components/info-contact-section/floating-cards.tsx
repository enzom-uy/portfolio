import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import IconCard from './icon-card'
import TwitterCard from './twitter-card'

const FloatingCards: React.FC = () => {
  return (
    <>
      <IconCard
        icon={FaGithub}
        right="43.5%"
        top="60px"
        animationSpeed="3.7s"
        href="https://github.com/enzom-uy/"
      />
      <TwitterCard top={''} right={'7%'} />
      <IconCard
        icon={FaLinkedin}
        right="-1.5%"
        top="130px"
        animationSpeed="3.3s"
        href="https://www.linkedin.com/in/enzomdev/"
      />
    </>
  )
}

export default FloatingCards
