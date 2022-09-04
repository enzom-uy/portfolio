import { useBreakpointValue } from '@chakra-ui/react'

const useViewport = () => {
  const isMobile = useBreakpointValue(
    { base: true, md: false },
    { fallback: 'md' }
  )

  return { isMobile }
}

export default useViewport
