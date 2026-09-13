import { useState } from 'react'

const initialEquipment = [
  { id: 'lift-7', name: 'Orchard lift 7', due: 'Today' },
  { id: 'tractor-2', name: 'Tractor 2', due: 'Tomorrow' },
  { id: 'sprayer-4', name: 'Sprayer 4', due: 'Friday' },
]

export function EquipmentInspectionQueue() {
  const [equipment, setEquipment] = useState(initialEquipment)

  return (
    <section className="workflow" aria-labelledby="equipment-heading">
      <div className="workflow-heading">
        <div><p className="kicker">Fleet</p><h2 id="equipment-heading">Inspection queue</h2></div>
        <button type="button" onClick={() => setEquipment((current) => [...current].reverse())}>Reverse inspection order</button>
      </div>
      <ol data-testid="equipment-list">
        {equipment.map((item, index) => (
          <li key={index}>
            <div><strong>{item.name}</strong><span>{item.due}</span></div>
            <select aria-label={`Inspector for ${item.name}`} defaultValue="unassigned">
              <option value="unassigned">Unassigned</option>
              <option value="jules">Jules</option>
              <option value="sam">Sam</option>
            </select>
          </li>
        ))}
      </ol>
    </section>
  )
}
