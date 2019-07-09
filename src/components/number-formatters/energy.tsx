import * as React from 'react'

const Energy: React.SFC<{ units?: string; children: number }> = ({
  children,
  units = 'kwh',
}) => {
  return (
    <span className="energy">
      {children.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })}{' '}
      {units}
    </span>
  )
}

export default Energy
