import { Box } from '@chakra-ui/react'
import React from 'react'

interface Props {
  color: string
  scale: string
  blur?: string
  top?: string
  right?: string
  left?: string
  bottom?: string
}
/** Used to render a colored ring.
 * @param {string} color - `Hex code` without the hash.
 * @param {string} scale - CSS Scale value. Example: `1.2`
 *  @param {string} [blur] - Blurs the ring itself.
 *  @param {string} [top] - Absolute top position of the ring.
 *  @param {string} [right] - Absolute right position of the ring.
 *  @param {string} [bottom] - Absolute bottom position of the ring.
 *  @param {string} [left] - Absolute left position of the ring.*/
const SVGRing: React.FC<Props> = ({
  color,
  scale,
  blur,
  top,
  right,
  left,
  bottom
}) => {
  return (
    <Box
      filter={`blur(${blur})`}
      position="absolute"
      top={top}
      left={left}
      right={right}
      bottom={bottom}
    >
      <svg
        style={{ transform: `scale(${scale})` }}
        width="62"
        height="62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M57.016 36.675c-4.112 15.346-19.885 24.453-35.23 20.34C6.44 52.905-2.668 37.132 1.445 21.786 5.555 6.44 21.33-2.667 36.675 1.445c15.345 4.112 24.451 19.885 20.34 35.23ZM15.37 25.517c-2.05 7.654 2.492 15.522 10.147 17.573C33.17 45.142 41.039 40.6 43.09 32.944 45.142 25.29 40.6 17.421 32.944 15.37c-7.655-2.05-15.523 2.492-17.574 10.147Z"
          fill={`#${color}`}
        ></path>
      </svg>
    </Box>
  )
}

export default SVGRing
