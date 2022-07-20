import {
  Box,
  Container,
  Flex,
  Heading,
  useColorModeValue
} from '@chakra-ui/react'
import ToggleColorMode from 'components/buttons/toggle-color-mode'
import Link from 'next/link'
import React from 'react'
import NavbarLinks from './navbar-links'
import NavbarTitle from './navbar-title'

const Navbar: React.FC = () => {
  return (
    <>
      <Box
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
          width="100%"
          maxW="130ch"
        >
          <Flex>
            <NavbarTitle />
            <NavbarLinks />
          </Flex>
          <ToggleColorMode />
        </Container>
      </Box>
    </>
  )
}

export default Navbar
