import { useState } from 'react'

const initialLoads = [
  { id: 'load-41', number: 'Load 41', destination: 'Portland Market' },
  { id: 'load-56', number: 'Load 56', destination: 'Cascade Foods' },
  { id: 'load-63', number: 'Load 63', destination: 'Northline Co-op' },
]

export function DispatchLoadSequence() {
  const [loads, setLoads] = useState(initialLoads)
  const deferFirst = () => setLoads(([first, ...rest]) => [...rest, first])

  return (
    <section className="workflow" aria-labelledby="dispatch-loads-heading">
      <div className="workflow-heading">
        <div><p className="kicker">Outbound</p><h2 id="dispatch-loads-heading">Dispatch sequence</h2></div>
        <button type="button" onClick={deferFirst}>Defer first load</button>
      </div>
      <ol data-testid="dispatch-load-list">
        {loads.map((load, index) => (
          <li key={index}>
            <div><strong>{load.number}</strong><span>{load.destination}</span></div>
            <label><input type="checkbox" /> Seal verified</label>
          </li>
        ))}
      </ol>
    </section>
  )
}
