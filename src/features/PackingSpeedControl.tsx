import { useState } from 'react'

export function PackingSpeedControl() {
  const [value, setValue] = useState(120)
  return <section className="workflow"><span>Packing speed</span><input type="number" value={value} onChange={(event) => setValue(Number(event.target.value))} /><output>{value}</output></section>
}
