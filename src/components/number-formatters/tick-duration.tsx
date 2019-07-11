import * as React from 'react'

const TickDuration: React.SFC<{ children: number }> = ({ children }) => {
  let output: string
  if (children <= 24) {
    output = `${children}h`
  } else if (children < 24 * 3) {
    output = `${children / 24}d ${children % 24} h`
  } else if (children < 24 * 365) {
    output = `${children / 24}d`
  } else {
    const days = (children % (24 / 365)).toFixed(0)
    output = `${children / 24 / 365}y ${days !== '0' ? `${days}d` : ''}`
  }
  return <span className="tick-duration">{output}</span>
}

export default TickDuration
