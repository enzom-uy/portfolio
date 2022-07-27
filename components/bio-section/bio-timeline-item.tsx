import { Box, Flex, Highlight, Text } from '@chakra-ui/react'
import React from 'react'

interface Props {
  year: number
  text: string
  highlight?: string
  p?: number
  bgColor?: string
  color?: string
}

const BioTimelineItem: React.FC<Props> = ({
  year,
  text,
  highlight,
  p,
  bgColor,
  color
}) => {
  return (
    <Flex gap={4} mb={1.4}>
      <Box as="span" fontWeight="bold" fontSize="1rem">
        {year}
      </Box>
      <Text fontSize="1rem" textAlign="left" letterSpacing="wide">
        {highlight ? (
          <Highlight
            query={highlight}
            styles={{ p: p, bgColor: bgColor, color: color }}
          >
            {text}
          </Highlight>
        ) : (
          text
        )}
      </Text>
    </Flex>
  )
}

export default BioTimelineItem
