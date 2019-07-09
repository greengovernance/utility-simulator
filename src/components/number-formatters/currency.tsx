import * as React from 'react'

const Currency: React.SFC<{ units?: string; children: number }> = ({
  children,
  units = 'usd',
}) => {
  return (
    <span className="currency">
      {children.toLocaleString(undefined, {
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}{' '}
      {units}
    </span>
  )
}

export default Currency
