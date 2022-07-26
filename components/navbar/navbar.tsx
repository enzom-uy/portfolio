import {
  Box,
  Container,
  Flex,
  useBreakpointValue,
  useColorModeValue
} from '@chakra-ui/react'
import ToggleColorMode from 'components/buttons/toggle-color-mode'
import React from 'react'
import NavbarLinks from './navbar-links'
import NavbarTitle from './navbar-title'

const Navbar: React.FC = () => {
  console.log('Rendering navbar')
  const showMobileMenuButton = useBreakpointValue({ base: true, md: false })
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
        zIndex={2}
      >
        <Container
          display="flex"
          justifyContent="space-between"
          width="100%"
          maxW="110ch"
        >
          {showMobileMenuButton ? (
            <>
              <NavbarTitle />
              <Flex gap={4}>
                <ToggleColorMode />
                <NavbarLinks />
              </Flex>
            </>
          ) : (
            <>
              <Flex>
                <NavbarTitle />
                <NavbarLinks />
              </Flex>
              <ToggleColorMode />
            </>
          )}
        </Container>
      </Box>
    </>
  )
}

export default Navbar
