import { useState } from 'react'

export function HarvestCrewLimitControl() {
  const [value, setValue] = useState(8)
  return <section className="workflow"><span>Harvest crew limit</span><input type="number" value={value} onChange={(event) => setValue(Number(event.target.value))} /><output>{value}</output></section>
}
