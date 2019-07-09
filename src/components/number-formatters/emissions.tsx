import * as React from 'react'

const Emissions: React.SFC<{ units?: string; children: number }> = ({
  children,
  units = 'mtco2',
}) => {
  return (
    <span className="emissions">
      {children.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })}{' '}
      {units}
    </span>
  )
}

export default Emissions
