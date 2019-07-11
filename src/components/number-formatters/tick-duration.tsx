import * as React from 'react'

const TickDuration: React.SFC<{ children: number }> = ({ children }) => {
  let output: string
  if (children <= 24) {
    output = `${children}h`
  } else if (children < 24 * 365) {
    const days = Math.floor(children / 24)
    output = `${days}d ${children % 24} h`
  } else {
    const years = Math.floor(children / 24 / 365)
    const days = ((children % (24 * 365)) / 24).toFixed(0)
    output = `${years}y ${days !== '0' ? `${days}d` : ''}`
  }
  return <span className="tick-duration">{output}</span>
}

export default TickDuration
