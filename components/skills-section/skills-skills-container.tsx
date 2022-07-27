import { Box, Flex } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

import { IconType } from 'react-icons'
import FrontendSkills from './skills-frontend-skills'
import BackendSkills from './skills-frontend-skills'

const SkillsContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Flex px={3} justifyContent="center" mb={6}>
      {children}
    </Flex>
  )
}

export default SkillsContainer
