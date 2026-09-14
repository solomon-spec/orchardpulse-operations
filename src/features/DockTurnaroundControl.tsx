import { useState } from 'react'

export function DockTurnaroundControl() {
  const [value, setValue] = useState(30)
  return <section className="workflow"><span>Dock turnaround</span><input type="number" value={value} onChange={(event) => setValue(Number(event.target.value))} /><output>{value}</output></section>
}
