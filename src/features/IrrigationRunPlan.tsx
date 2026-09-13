import { useState } from 'react'

const initialZones = [
  { id: 'zone-east', name: 'East slope', duration: 45 },
  { id: 'zone-creek', name: 'Creek row', duration: 30 },
  { id: 'zone-upper', name: 'Upper bench', duration: 60 },
]

export function IrrigationRunPlan() {
  const [zones, setZones] = useState(initialZones)

  return (
    <section className="workflow" aria-labelledby="irrigation-heading">
      <div className="workflow-heading">
        <div><p className="kicker">Water</p><h2 id="irrigation-heading">Irrigation run plan</h2></div>
        <button type="button" onClick={() => setZones((current) => [...current].reverse())}>Reverse zone order</button>
      </div>
      <ol data-testid="irrigation-zone-list">
        {zones.map((zone, index) => (
          <li key={index}>
            <div><strong>{zone.name}</strong><span>{zone.duration} minutes</span></div>
            <input aria-label={`Flow target for ${zone.name}`} defaultValue="Normal" />
          </li>
        ))}
      </ol>
    </section>
  )
}
