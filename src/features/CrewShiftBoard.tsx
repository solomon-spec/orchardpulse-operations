import { useState } from 'react'

const initialCrews = [
  { id: 'crew-amber', name: 'Amber Crew', lead: 'Maya Chen' },
  { id: 'crew-blue', name: 'Blue Crew', lead: 'Noah Blake' },
  { id: 'crew-cider', name: 'Cider Crew', lead: 'Ana Ruiz' },
]

export function CrewShiftBoard() {
  const [crews, setCrews] = useState(initialCrews)
  const sortByLead = () => setCrews((current) => [...current].sort((a, b) => a.lead.localeCompare(b.lead)))

  return (
    <section className="workflow" aria-labelledby="crew-shifts-heading">
      <div className="workflow-heading">
        <div><p className="kicker">People</p><h2 id="crew-shifts-heading">Crew shifts</h2></div>
        <button type="button" onClick={sortByLead}>Sort by lead</button>
      </div>
      <ul data-testid="crew-shift-list">
        {crews.map((crew, index) => (
          <li key={index}>
            <div><strong>{crew.name}</strong><span>{crew.lead}</span></div>
            <input aria-label={`Meeting point for ${crew.name}`} defaultValue="Main barn" />
          </li>
        ))}
      </ul>
    </section>
  )
}
