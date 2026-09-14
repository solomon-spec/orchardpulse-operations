import { useState } from 'react'

interface WasteDiversionItem { readonly id: string; readonly label: string; readonly detail: string }

const initialItems: WasteDiversionItem[] = [
  { id: 'waste-diversion-1', label: 'Compost stream', detail: 'Ready' },
  { id: 'waste-diversion-2', label: 'Feed stream', detail: 'Review' },
]

function WasteDiversionRow({ item }: { readonly item: WasteDiversionItem }) {
  const [note, setNote] = useState('')
  return <li><div><strong>{item.label}</strong><span>{item.detail}</span></div><input aria-label={`Note for ${item.label}`} value={note} onChange={(event) => setNote(event.target.value)} /></li>
}

export function WasteDiversionQueue() {
  const [reverse, setReverse] = useState(false)
  const visibleItems = reverse ? [...initialItems].reverse() : initialItems
  return <section className="workflow"><h2>Waste Diversion</h2><button type="button" onClick={() => setReverse((value) => !value)}>Reverse waste diversion order</button><ul data-testid="waste-diversion-list">{visibleItems.map((item, index) => <WasteDiversionRow key={index} item={item} />)}</ul></section>
}
