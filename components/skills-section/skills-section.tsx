import SimpleContainer from 'components/containers/simple-container'
import SectionTitle from 'components/text/section-title'
import React from 'react'
import BackendSkills from './skills-backend-skills'
import SkillsCategory from './skills-category'
import FrontendSkills from './skills-frontend-skills'
import SkillsContainer from './skills-skills-container'

const SkillsSection: React.FC = () => {
  return (
    <SimpleContainer as="section">
      <SectionTitle as="h3">Skills</SectionTitle>
      <SkillsCategory category="Frontend" />
      <SkillsContainer>
        <FrontendSkills />
      </SkillsContainer>
      <SkillsCategory category="Backend" decorationColor="teal.800" />
      <SkillsContainer>
        <BackendSkills />
      </SkillsContainer>
    </SimpleContainer>
  )
}

export default SkillsSection
