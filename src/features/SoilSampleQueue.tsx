import { useState } from 'react'

interface SoilSampleItem { readonly id: string; readonly label: string; readonly detail: string }

const initialItems: SoilSampleItem[] = [
  { id: 'soil-sample-1', label: 'Sample East', detail: 'Ready' },
  { id: 'soil-sample-2', label: 'Sample West', detail: 'Review' },
]

function SoilSampleRow({ item }: { readonly item: SoilSampleItem }) {
  const [note, setNote] = useState('')
  return <li><div><strong>{item.label}</strong><span>{item.detail}</span></div><input aria-label={`Note for ${item.label}`} value={note} onChange={(event) => setNote(event.target.value)} /></li>
}

export function SoilSampleQueue() {
  const [reverse, setReverse] = useState(false)
  const visibleItems = reverse ? [...initialItems].reverse() : initialItems
  return <section className="workflow"><h2>Soil Sample</h2><button type="button" onClick={() => setReverse((value) => !value)}>Reverse soil sample order</button><ul data-testid="soil-sample-list">{visibleItems.map((item, index) => <SoilSampleRow key={index} item={item} />)}</ul></section>
}
