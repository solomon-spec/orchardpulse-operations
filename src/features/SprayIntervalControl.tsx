import { useState } from 'react'

export function SprayIntervalControl() {
  const [value, setValue] = useState(10)
  return <section className="workflow"><span>Spray interval</span><input type="number" value={value} onChange={(event) => setValue(Number(event.target.value))} /><output>{value}</output></section>
}
