import { Box, Flex, Icon, Tooltip } from '@chakra-ui/react'
import React from 'react'
import { IconType } from 'react-icons'

const SkillsSkill: React.FC<{
  icon: IconType
  name: string
  tooltip: string
}> = ({ icon, name, tooltip }) => {
  return (
    <Tooltip label={tooltip} hasArrow placement="top">
      <Flex
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        bgColor="white"
        rounded="lg"
        width="130px"
        grow="1"
      >
        <Box p={4}>
          <Icon as={icon} fontSize="skill-icon" />
        </Box>
        <Box
          bgColor="cardbg"
          w="full"
          textAlign="center"
          fontWeight="bold"
          p={1}
          letterSpacing="tight"
        >
          {name}
        </Box>
      </Flex>
    </Tooltip>
  )
}

export default SkillsSkill
