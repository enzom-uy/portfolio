import {Flex, Heading} from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const NavbarTitle: React.FC = () => {
  return (
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
  )
}

export default NavbarTitle
