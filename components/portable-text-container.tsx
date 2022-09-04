import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'
import styles from './portable-text-styles.module.scss'

export const PortableTextContainer: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  return <Box className={styles.portableTextContainer}>{children}</Box>
}

export default PortableTextContainer
