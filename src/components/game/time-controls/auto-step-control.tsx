import * as React from 'react'
import { useDispatch } from 'react-redux'
import step from '../../../simulation/step'
import Button from 'reactstrap/lib/Button'
import {
  MdPause as PauseIcon,
  MdPlayArrow as PlayIcon,
  MdFastForward as FastForwardIcon,
} from 'react-icons/md'

const AutoStepControl: React.SFC = () => {
  const dispatch = useDispatch()
  const [intervalLength, setIntervalLength] = React.useState<
    number | undefined
  >(1000)
  React.useEffect(() => {
    if (intervalLength !== undefined) {
      const interval = setInterval(() => {
        dispatch(step())
      }, intervalLength)
      return () => clearInterval(interval)
    }
  }, [dispatch, intervalLength])
  return (
    <div>
      <Button outline size="sm" onClick={() => setIntervalLength(undefined)}>
        <PauseIcon />
      </Button>
      <Button outline size="sm" onClick={() => setIntervalLength(1000)}>
        <PlayIcon />
      </Button>
      <Button outline size="sm" onClick={() => setIntervalLength(100)}>
        <FastForwardIcon />
      </Button>
    </div>
  )
}

export default AutoStepControl
