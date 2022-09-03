import { Flex } from '@chakra-ui/react'
import React from 'react'
import SkillsSkill from './skills-skill'
import { IconType } from 'react-icons'
import { SiMongodb, SiMysql, SiPrisma } from 'react-icons/si'

const databasesSkills: Array<{
  name: string
  icon: IconType
  briefSummary: string
}> = [
  {
    name: 'MySQL',
    icon: SiMysql,
    briefSummary:
      'Relational database management system. Usually I use it through Prisma.'
  },
  {
    name: 'MongoDB',
    icon: SiMongodb,
    briefSummary:
      'NoSQL database management system. Stores data as "documents" in a collection.'
  },
  {
    name: 'Prisma',
    icon: SiPrisma,
    briefSummary:
      'Open source ORM. It creates a layer between the programming language and the database to make working with databases more secure.'
  }
]

const DatabasesSkills: React.FC = () => {
  return (
    <Flex wrap="wrap" gap={6}>
      {databasesSkills.map((skill) => (
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

export default DatabasesSkills
