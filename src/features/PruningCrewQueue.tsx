import { useState } from 'react'

interface PruningCrewItem { readonly id: string; readonly label: string; readonly detail: string }

const initialItems: PruningCrewItem[] = [
  { id: 'pruning-crew-1', label: 'Crew Cedar', detail: 'Ready' },
  { id: 'pruning-crew-2', label: 'Crew Maple', detail: 'Review' },
]

function PruningCrewRow({ item }: { readonly item: PruningCrewItem }) {
  const [note, setNote] = useState('')
  return <li><div><strong>{item.label}</strong><span>{item.detail}</span></div><input aria-label={`Note for ${item.label}`} value={note} onChange={(event) => setNote(event.target.value)} /></li>
}

export function PruningCrewQueue() {
  const [reverse, setReverse] = useState(false)
  const visibleItems = reverse ? [...initialItems].reverse() : initialItems
  return <section className="workflow"><h2>Pruning Crew</h2><button type="button" onClick={() => setReverse((value) => !value)}>Reverse pruning crew order</button><ul data-testid="pruning-crew-list">{visibleItems.map((item, index) => <PruningCrewRow key={index} item={item} />)}</ul></section>
}
