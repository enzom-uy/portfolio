import { Flex } from '@chakra-ui/react'
import React from 'react'
import SkillsSkill from './skills-skill'
import { SiExpress, SiNodedotjs, SiTypescript } from 'react-icons/si'
import { IconType } from 'react-icons'

const backendSkills: Array<{ name: string; icon: IconType }> = [
  {
    name: 'Typescript',
    icon: SiTypescript
  },
  {
    name: 'Node',
    icon: SiNodedotjs
  },
  {
    name: 'Express',
    icon: SiExpress
  }
]

const BackendSkills: React.FC = () => {
  return (
    <Flex wrap="wrap" gap={6}>
      {backendSkills.map((skill) => (
        <SkillsSkill key={skill.name} name={skill.name} icon={skill.icon} />
      ))}
    </Flex>
  )
}

export default BackendSkills
