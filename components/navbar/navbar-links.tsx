import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Flex,
  Icon,
  List,
  ListItem,
  useBreakpointValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Link as ChakraLink
} from '@chakra-ui/react'
import { links } from 'helpers/variables'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

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
          <Link href={item.href}>{item.name}</Link>
        )}
      </ListItem>
    )
  })
  return renderLinks
}
const linksMobile = links.mobile.map((item) => (
  <MenuItem
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
  </MenuItem>
))

const NavbarLinks: React.FC = () => {
  const router = useRouter()
  const currentPath = router.route
  const showMobileMenu = useBreakpointValue({ base: true, md: false })
  if (showMobileMenu === false) {
    return (
      <Flex as={List} gap={2}>
        {linksDesktop(currentPath)}
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
