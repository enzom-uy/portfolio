import { Flex } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

const SkillsContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Flex px={3} justifyContent="center" mb={6}>
      {children}
    </Flex>
  )
}

export default SkillsContainer
