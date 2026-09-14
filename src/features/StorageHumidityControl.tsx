import { useState } from 'react'

export function StorageHumidityControl() {
  const [value, setValue] = useState(88)
  return <section className="workflow"><span>Storage humidity</span><input type="number" value={value} onChange={(event) => setValue(Number(event.target.value))} /><output>{value}</output></section>
}
