import { useState } from 'react'

const initialDeliveries = [
  { id: 'delivery-canyon', grower: 'Canyon Orchard', bins: 24 },
  { id: 'delivery-meadow', grower: 'Meadow Fruit', bins: 18 },
  { id: 'delivery-sunrise', grower: 'Sunrise Acres', bins: 31 },
]

export function GrowerDeliveryBoard() {
  const [deliveries, setDeliveries] = useState(initialDeliveries)
  const moveFirstToEnd = () => setDeliveries(([first, ...rest]) => [...rest, first])

  return (
    <section className="workflow" aria-labelledby="delivery-heading">
      <div className="workflow-heading">
        <div><p className="kicker">Receiving</p><h2 id="delivery-heading">Grower deliveries</h2></div>
        <button type="button" onClick={moveFirstToEnd}>Move first delivery to end</button>
      </div>
      <ol data-testid="delivery-list">
        {deliveries.map((delivery, index) => (
          <li key={index}>
            <div><strong>{delivery.grower}</strong><span>{delivery.bins} bins</span></div>
            <input aria-label={`Dock note for ${delivery.grower}`} defaultValue="Awaiting dock" />
          </li>
        ))}
      </ol>
    </section>
  )
}
