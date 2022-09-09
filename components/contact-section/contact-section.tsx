import { Flex, Icon, Link, Text } from '@chakra-ui/react'
import SimpleContainer from 'components/containers/simple-container'
import SectionTitle from 'components/text/section-title'
import useViewport from 'hooks/useViewport'
import React from 'react'
import { IconType } from 'react-icons'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { CgMail } from 'react-icons/cg'

const contactInfo: Array<{
  name: string
  icon: IconType
  href?: string
}> = [
  {
    name: '/enzom-uy',
    icon: FaGithub,
    href: 'https://github.com/enzom-uy/'
  },
  {
    name: 'enzom.dev@gmail.com',
    icon: CgMail,
    href: 'mailto:enzom.dev@gmail.com'
  },
  {
    name: 'Enzo Muñoz',
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/enzomdev/'
  },
  {
    name: '@enzom_uy',
    icon: FaTwitter,
    href: 'https://twitter.com/enzom_uy'
  }
]

const ContactSection: React.FC = () => {
  const { isMobile } = useViewport()
  return (
    <SimpleContainer flexDir="column">
      <SectionTitle textDecorationColor="green.400">Contact me</SectionTitle>
      <Flex gap={2} flexDir="column" pl={2} width="-webkit-fit-content">
        {contactInfo.map((item) => (
          <Flex
            transitionProperty="all"
            transitionDuration="normal"
            as={Link}
            display="inline-flex"
            key={item.name}
            alignItems="center"
            gap={3}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            _hover={
              isMobile
                ? undefined
                : {
                    backgroundColor: '#ffffff',
                    color: '#000000',
                    textDecoration: 'none'
                  }
            }
            width="fit-content"
            px={4}
            py={2}
            rounded="lg"
          >
            <Icon as={item.icon} fontSize="1.5rem" />{' '}
            <Text fontWeight="800">{item.name}</Text>
          </Flex>
        ))}
      </Flex>
    </SimpleContainer>
  )
}

export default ContactSection
