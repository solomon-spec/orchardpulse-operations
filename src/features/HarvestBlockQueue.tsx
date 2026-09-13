import { useState } from 'react'

const initialBlocks = [
  { id: 'block-north', name: 'North Gala', acres: 18 },
  { id: 'block-river', name: 'River Honeycrisp', acres: 12 },
  { id: 'block-hill', name: 'Hilltop Fuji', acres: 21 },
]

export function HarvestBlockQueue() {
  const [blocks, setBlocks] = useState(initialBlocks)

  return (
    <section className="workflow" aria-labelledby="harvest-blocks-heading">
      <div className="workflow-heading">
        <div>
          <p className="kicker">Field planning</p>
          <h2 id="harvest-blocks-heading">Harvest block queue</h2>
        </div>
        <button type="button" onClick={() => setBlocks((current) => [...current].reverse())}>
          Reverse picking order
        </button>
      </div>
      <ol data-testid="harvest-block-list">
        {blocks.map((block, index) => (
          <li key={index}>
            <div><strong>{block.name}</strong><span>{block.acres} acres</span></div>
            <input aria-label={`Crew note for ${block.name}`} defaultValue="Unassigned" />
          </li>
        ))}
      </ol>
    </section>
  )
}
