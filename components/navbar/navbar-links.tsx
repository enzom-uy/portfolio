import {Flex, Icon, List, ListItem} from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import {FaGithub} from 'react-icons/fa'

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

const NavbarLinks: React.FC = () => {
  return (
    <Flex as={List} gap={4}>
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
          {item.icon !== undefined && <Icon as={item.icon} mr="7.5px" />}
          <Link href={item.href}>{item.name}</Link>
        </ListItem>
      ))}
    </Flex>
  )
}

export default NavbarLinks
