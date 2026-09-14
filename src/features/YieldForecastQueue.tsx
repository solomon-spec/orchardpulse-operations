import { useState } from 'react'

interface YieldForecastItem { readonly id: string; readonly label: string; readonly detail: string }

const initialItems: YieldForecastItem[] = [
  { id: 'yield-forecast-1', label: 'Forecast Week 1', detail: 'Ready' },
  { id: 'yield-forecast-2', label: 'Forecast Week 3', detail: 'Review' },
]

function YieldForecastRow({ item }: { readonly item: YieldForecastItem }) {
  const [note, setNote] = useState('')
  return <li><div><strong>{item.label}</strong><span>{item.detail}</span></div><input aria-label={`Note for ${item.label}`} value={note} onChange={(event) => setNote(event.target.value)} /></li>
}

export function YieldForecastQueue() {
  const [reverse, setReverse] = useState(false)
  const visibleItems = reverse ? [...initialItems].reverse() : initialItems
  return <section className="workflow"><h2>Yield Forecast</h2><button type="button" onClick={() => setReverse((value) => !value)}>Reverse yield forecast order</button><ul data-testid="yield-forecast-list">{visibleItems.map((item, index) => <YieldForecastRow key={index} item={item} />)}</ul></section>
}
