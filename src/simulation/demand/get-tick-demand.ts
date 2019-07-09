import allDemand from './data/nyis-hourly-demand.json'

const oneYear = allDemand.data.slice(
  allDemand.data.findIndex((d) => d[0] === '20181231T23Z'),
  allDemand.data.findIndex((d) => d[0] === '20180101T00Z') + 1,
)

const getTickDemand = (tick: number) => {
  const tickInYear = tick % oneYear.length
  return oneYear[tickInYear][1] as number
}

export default getTickDemand
;(window as any).getTickDemand = getTickDemand
;(window as any).oneYear = oneYear
