import * as React from 'react'

const Power: React.SFC<{ units?: string; children: number }> = ({
  children,
  units = 'kw',
}) => {
  return (
    <span className="power">
      {children.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })}{' '}
      {units}
    </span>
  )
}

export default Power
