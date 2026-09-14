import { useState } from 'react'

interface WaterAllocationItem { readonly id: string; readonly label: string; readonly detail: string }

const initialItems: WaterAllocationItem[] = [
  { id: 'water-allocation-1', label: 'Zone Alpha', detail: 'Ready' },
  { id: 'water-allocation-2', label: 'Zone Gamma', detail: 'Review' },
]

function WaterAllocationRow({ item }: { readonly item: WaterAllocationItem }) {
  const [note, setNote] = useState('')
  return <li><div><strong>{item.label}</strong><span>{item.detail}</span></div><input aria-label={`Note for ${item.label}`} value={note} onChange={(event) => setNote(event.target.value)} /></li>
}

export function WaterAllocationBoard() {
  const [reverse, setReverse] = useState(false)
  const visibleItems = reverse ? [...initialItems].reverse() : initialItems
  return <section className="workflow"><h2>Water Allocation</h2><button type="button" onClick={() => setReverse((value) => !value)}>Reverse water allocation order</button><ul data-testid="water-allocation-list">{visibleItems.map((item, index) => <WaterAllocationRow key={index} item={item} />)}</ul></section>
}
