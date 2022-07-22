import React from 'react'
import AnimatedNumber from 'react-animated-number'

interface Props {
  value: number
}

const CustomNumber: React.FC<Props> = ({ value }) => {
  return (
    <AnimatedNumber
      component="text"
      value={value}
      style={{
        transition: '0.8s ease-out',
        fontSize: 48,
        transitionProperty: 'background-color, color, opacity'
      }}
      duration={800}
      formatValue={(v: number) => v.toFixed(0)}
    />
  )
}

export default React.memo(CustomNumber)
