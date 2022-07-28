import { Flex } from '@chakra-ui/react'
import React from 'react'
import SkillsSkill from './skills-skill'
import { SiExpress, SiNodedotjs, SiTypescript } from 'react-icons/si'
import { IconType } from 'react-icons'

const backendSkills: Array<{
  name: string
  icon: IconType
  briefSummary: string
}> = [
  {
    name: 'Typescript',
    icon: SiTypescript,
    briefSummary: 'Javascript superset to make it actually safe to use.'
  },
  {
    name: 'Node',
    icon: SiNodedotjs,
    briefSummary: 'Javascript on the backend.'
  },
  {
    name: 'Express',
    icon: SiExpress,
    briefSummary: 'Javascript minimalist web framework for Nodejs'
  }
]

const BackendSkills: React.FC = () => {
  return (
    <Flex wrap="wrap" gap={6}>
      {backendSkills.map((skill) => (
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

export default BackendSkills
