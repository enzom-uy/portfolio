import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Flex,
  Icon,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Link as ChakraLink,
  chakra
} from '@chakra-ui/react'
import { getCookie } from 'cookies-next'
import { links } from 'helpers/variables'
import useViewport from 'hooks/useViewport'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const NextLink = chakra(Link)

const linksDesktop = (currentPath: string) => {
  const renderLinks = links.desktop.map((item) => {
    const isCurrentPath = currentPath === item.href
    return (
      <ListItem
        key={item.name}
        display="flex"
        alignItems="center"
        _hover={{
          textDecoration: 'underline',
          textUnderlineOffset: '3px'
        }}
        color={isCurrentPath ? 'dark' : undefined}
        bgColor={isCurrentPath ? 'teal.500' : undefined}
        p={2}
      >
        {item.icon !== undefined && <Icon as={item.icon} mr="7.5px" />}
        {item.icon ? (
          <ChakraLink href={item.href} target="_blank" rel="noreferrer">
            {item.name}
          </ChakraLink>
        ) : (
          <NextLink href={item.href}>{item.name}</NextLink>
        )}
      </ListItem>
    )
  })
  return renderLinks
}
const linksMobile = links.mobile.map((item) => (
  <MenuItem key={item.name} display="flex" alignItems="center">
    {item.icon !== undefined && <Icon as={item.icon} mr="7.5px" />}
    <NextLink href={item.href}>{item.name}</NextLink>
  </MenuItem>
))

const NavbarLinks: React.FC = () => {
  const router = useRouter()
  const currentPath = router.route
  const isCurrentPath = currentPath === '/admin/dashboard'
  const { isMobile } = useViewport()
  const isAdmin = getCookie('user')
  if (isMobile === false) {
    return (
      <Flex as={List} gap={2}>
        {linksDesktop(currentPath)}

        {isAdmin && (
          <ListItem
            display="flex"
            alignItems="center"
            _hover={{
              textDecoration: 'underline',
              textUnderlineOffset: '3px'
            }}
            color={isCurrentPath ? 'dark' : undefined}
            bgColor={isCurrentPath ? 'teal.500' : undefined}
            p={2}
          >
            <NextLink href="/admin/dashboard">
              <a>Admin</a>
            </NextLink>
          </ListItem>
        )}
      </Flex>
    )
  } else {
    return (
      <Menu isLazy>
        <MenuButton as={Button}>
          <HamburgerIcon />
        </MenuButton>
        <MenuList>{linksMobile}</MenuList>
      </Menu>
    )
  }
}

export default NavbarLinks
