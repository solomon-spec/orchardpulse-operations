import { useState } from 'react'

export function FrostWarningControl() {
  const [value, setValue] = useState(2)
  return <section className="workflow"><span>Frost warning</span><input type="number" value={value} onChange={(event) => setValue(Number(event.target.value))} /><output>{value}</output></section>
}
