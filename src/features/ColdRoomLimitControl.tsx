import { useState } from 'react'

export function ColdRoomLimitControl() {
  const [value, setValue] = useState(3)
  return <section className="workflow"><span>Cold room limit</span><input type="number" value={value} onChange={(event) => setValue(Number(event.target.value))} /><output>{value}</output></section>
}
