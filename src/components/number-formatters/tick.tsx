import * as React from 'react'

const Tick: React.SFC<{ children: number }> = ({ children }) => {
  const startDate = new Date('2018-01-01T00:00:00')
  startDate.setHours(children)
  return (
    <span className="Tick">
      {startDate.toLocaleString(undefined, {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      })}
    </span>
  )
}

export default Tick
