import {AnimatePresence, motion} from 'framer-motion'
import {useColorMode, useColorModeValue, IconButton} from '@chakra-ui/react'
import React from 'react'
import {MoonIcon, SunIcon} from '@chakra-ui/icons'

const ToggleColorMode: React.FC = () => {
  const {toggleColorMode} = useColorMode()
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        key={useColorModeValue('light', 'dark')}
        initial={{y: -20, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        exit={{y: 20, opacity: 0}}
        transition={{duration: 0.2}}
      >
        <IconButton
          aria-label="Toggle theme"
          colorScheme={useColorModeValue('purple', 'orange')}
          icon={useColorModeValue(
            <MoonIcon color="whiteAlpha.900" />,
            <SunIcon />
          )}
          onClick={toggleColorMode}
          zIndex={2}
        />
      </motion.div>
    </AnimatePresence>
  )
}

export default ToggleColorMode
