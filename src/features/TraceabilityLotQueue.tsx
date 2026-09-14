import { useState } from 'react'

interface TraceabilityLotItem { readonly id: string; readonly label: string; readonly detail: string }

const initialItems: TraceabilityLotItem[] = [
  { id: 'traceability-lot-1', label: 'Lot AP-14', detail: 'Ready' },
  { id: 'traceability-lot-2', label: 'Lot AP-28', detail: 'Review' },
]

function TraceabilityLotRow({ item }: { readonly item: TraceabilityLotItem }) {
  const [note, setNote] = useState('')
  return <li><div><strong>{item.label}</strong><span>{item.detail}</span></div><input aria-label={`Note for ${item.label}`} value={note} onChange={(event) => setNote(event.target.value)} /></li>
}

export function TraceabilityLotQueue() {
  const [reverse, setReverse] = useState(false)
  const visibleItems = reverse ? [...initialItems].reverse() : initialItems
  return <section className="workflow"><h2>Traceability Lot</h2><button type="button" onClick={() => setReverse((value) => !value)}>Reverse traceability lot order</button><ul data-testid="traceability-lot-list">{visibleItems.map((item, index) => <TraceabilityLotRow key={index} item={item} />)}</ul></section>
}
