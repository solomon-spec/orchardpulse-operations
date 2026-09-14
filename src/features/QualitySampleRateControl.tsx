import { useState } from 'react'

export function QualitySampleRateControl() {
  const [value, setValue] = useState(12)
  return <section className="workflow"><span>Quality sample rate</span><input type="number" value={value} onChange={(event) => setValue(Number(event.target.value))} /><output>{value}</output></section>
}
