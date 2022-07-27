import SimpleContainer from 'components/containers/simple-container'
import SectionTitle from 'components/text/section-title'
import React from 'react'

const SkillsCategory: React.FC<{
  category: string
  decorationColor?: string
}> = ({ category, decorationColor }) => {
  return (
    <SimpleContainer p={2} justifyContent="center">
      <SectionTitle
        as="h3"
        mb={2}
        textDecorationColor={decorationColor ? decorationColor : 'red.700'}
      >
        {category}
      </SectionTitle>
    </SimpleContainer>
  )
}

export default SkillsCategory
