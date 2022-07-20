import {HamburgerIcon} from '@chakra-ui/icons'
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
  Button
} from '@chakra-ui/react'
import {links} from 'helpers/variables'
import Link from 'next/link'
import React from 'react'

const linksInList = links.map((item) => (
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
))

const linksInMenu = links.map((item) => (
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
  const showMobileMenu = useBreakpointValue({base: true, md: false})
  if (showMobileMenu === false) {
    return (
      <Flex as={List} gap={4}>
        {linksInList}
      </Flex>
    )
  } else {
    return (
      <Menu isLazy>
        <MenuButton as={Button}>
          <HamburgerIcon />
        </MenuButton>
        <MenuList>{linksInMenu}</MenuList>
      </Menu>
    )
  }
}

export default NavbarLinks
