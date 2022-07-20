import {
  Container,
  Flex,
  Heading,
  Icon,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import ToggleColorMode from 'components/buttons/toggle-color-mode'
import {FaGithub} from 'react-icons/fa'
import Link from 'next/link'
import React from 'react'

const links = [
  {
    name: 'Works',
    icon: undefined,
    href: '/works'
  },
  {
    name: 'Posts',
    icon: undefined,
    href: '/posts'
  },
  {
    name: 'Source',
    icon: FaGithub,
    href: 'https://github.com/enzom-uy/'
  }
]

const Navbar: React.FC = () => {
  return (
    <>
      <Flex
        as="nav"
        bgColor={useColorModeValue('white', 'dark')}
        alignItems="center"
        justifyContent="space-between"
        position="fixed"
        backdropFilter="blur(10px)"
        width="100%"
        p={2}
      >
        <Container
          display="flex"
          justifyContent="space-around"
          alignItems="center"
        >
          <Flex>
            <Flex alignItems="center" mr={10}>
              <Link href="/">
                <Heading
                  fontFamily="heading"
                  fontSize="1.2rem"
                  cursor="pointer"
                  whiteSpace="nowrap"
                >
                  Enzo Muñoz
                </Heading>
              </Link>
            </Flex>
            <Flex as={List} gap={4} pr="23rem">
              {links.map((item) => (
                <ListItem
                  key={item.name}
                  display="flex"
                  alignItems="center"
                  _hover={{
                    textDecoration: 'underline',
                    textUnderlineOffset: '3px'
                  }}
                >
                  {item.icon !== undefined && (
                    <Icon as={item.icon} mr="7.5px" />
                  )}
                  <Link href={item.href}>{item.name}</Link>
                </ListItem>
              ))}
            </Flex>
          </Flex>
          <ToggleColorMode />
        </Container>
      </Flex>
    </>
  )
}

export default Navbar
