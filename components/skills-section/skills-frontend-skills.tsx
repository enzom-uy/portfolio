import { Flex } from '@chakra-ui/react'
import React from 'react'

import SkillsSkill from './skills-skill'
import {
  SiChakraui,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript
} from 'react-icons/si'
import { IconType } from 'react-icons'

const frontendSkills: Array<{ name: string; icon: IconType }> = [
  {
    name: 'React',
    icon: SiReact
  },

  {
    name: 'Typescript',
    icon: SiTypescript
  },
  {
    name: 'Chakra',
    icon: SiChakraui
  },
  {
    name: 'Tailwind',
    icon: SiTailwindcss
  },
  {
    name: 'Next',
    icon: SiNextdotjs
  }
]

const FrontendSkills: React.FC = () => {
  return (
    <Flex wrap="wrap" gap={6}>
      {frontendSkills.map((skill) => (
        <SkillsSkill key={skill.name} name={skill.name} icon={skill.icon} />
      ))}
    </Flex>
  )
}

export default FrontendSkills
