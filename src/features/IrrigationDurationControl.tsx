import { useState } from 'react'

export function IrrigationDurationControl() {
  const [value, setValue] = useState(45)
  return <section className="workflow"><span>Irrigation duration</span><input type="number" value={value} onChange={(event) => setValue(Number(event.target.value))} /><output>{value}</output></section>
}
