import { useColorModeValue } from '@chakra-ui/react'
import SimpleContainer from 'components/containers/simple-container'
import SectionParagraph from 'components/text/section-paragraph'
import SectionTitle from 'components/text/section-title'
import React from 'react'
import BioTimelineItem from './bio-timeline-item'

const BioSection: React.FC = () => {
  const textDecorationColor = useColorModeValue('purple.500', 'orange.200')
  return (
    <SimpleContainer as="section">
      <SectionTitle textDecorationColor={textDecorationColor} as="h3">
        Bio
      </SectionTitle>
      <SectionParagraph>
        Enzo is a Full Stack Developer based in Uruguay with a passion for
        coding and nerdy stuff. He started his journey in 2021 when he decided
        to study Web Development. Currently, he keeps practicing and learning
        everyday, building things for him and his friends.
      </SectionParagraph>
      <BioTimelineItem year={2001} text={'Born in Florida, Uruguay.'} />
      <BioTimelineItem
        year={2021}
        text={'Started self-learning web development alongside with courses.'}
      />
      <BioTimelineItem
        year={2021}
        text={'Completed a Full Stack Developer Bootcamp at Senpai Academy.'}
        highlight="Senpai Academy"
        p={1}
        color="#6768E3"
      />
      <BioTimelineItem
        year={2022}
        text={'Completed a React.js-specific course at Coderhouse.'}
        highlight="Coderhouse"
        p={1}
        color="#C1D35D"
      />
    </SimpleContainer>
  )
}

export default BioSection
