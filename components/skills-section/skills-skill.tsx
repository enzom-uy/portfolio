import { Box, Flex, Icon } from '@chakra-ui/react'
import React from 'react'
import { IconType } from 'react-icons'

const SkillsSkill: React.FC<{ icon: IconType; name: string }> = ({
  icon,
  name
}) => {
  return (
    <Flex
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      bgColor="white"
      rounded="lg"
      minW="100px"
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
  )
}

export default SkillsSkill
