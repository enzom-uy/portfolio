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

const frontendSkills: Array<{
  name: string
  icon: IconType
  briefSummary: string
}> = [
  {
    name: 'React',
    icon: SiReact,
    briefSummary: 'Javascript library for creating UIs.'
  },

  {
    name: 'Typescript',
    icon: SiTypescript,
    briefSummary: 'Javascript superset to make it actually safe to use.'
  },
  {
    name: 'Chakra',
    icon: SiChakraui,
    briefSummary: 'React UI library for quick development.'
  },
  {
    name: 'Tailwind',
    icon: SiTailwindcss,
    briefSummary: 'CSS Framework based on classes.'
  },
  {
    name: 'Next',
    icon: SiNextdotjs,
    briefSummary: 'React framework to create fast web applications.'
  }
]

const FrontendSkills: React.FC = () => {
  return (
    <Flex wrap="wrap" gap={6}>
      {frontendSkills.map((skill) => (
        <SkillsSkill
          key={skill.name}
          name={skill.name}
          icon={skill.icon}
          tooltip={skill.briefSummary}
        />
      ))}
    </Flex>
  )
}

export default FrontendSkills
