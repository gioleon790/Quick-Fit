import React from 'react'

const ColoredLine: React.FC<{ color?: string }> = ({ color }) => {
  return <hr style={{ color: color, backgroundColor: color, height: 1 }} />
}

export default ColoredLine
