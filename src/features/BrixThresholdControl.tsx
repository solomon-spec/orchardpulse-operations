import { useState } from 'react'

export function BrixThresholdControl() {
  const [value, setValue] = useState(14)
  return <section className="workflow"><span>Brix threshold</span><input type="number" value={value} onChange={(event) => setValue(Number(event.target.value))} /><output>{value}</output></section>
}
