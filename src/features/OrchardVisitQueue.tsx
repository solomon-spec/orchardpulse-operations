import { useState } from 'react'

interface OrchardVisitItem { readonly id: string; readonly label: string; readonly detail: string }

const initialItems: OrchardVisitItem[] = [
  { id: 'orchard-visit-1', label: 'Grower Adams', detail: 'Ready' },
  { id: 'orchard-visit-2', label: 'Grower Brooks', detail: 'Review' },
]

function OrchardVisitRow({ item }: { readonly item: OrchardVisitItem }) {
  const [note, setNote] = useState('')
  return <li><div><strong>{item.label}</strong><span>{item.detail}</span></div><input aria-label={`Note for ${item.label}`} value={note} onChange={(event) => setNote(event.target.value)} /></li>
}

export function OrchardVisitQueue() {
  const [reverse, setReverse] = useState(false)
  const visibleItems = reverse ? [...initialItems].reverse() : initialItems
  return <section className="workflow"><h2>Orchard Visit</h2><button type="button" onClick={() => setReverse((value) => !value)}>Reverse orchard visit order</button><ul data-testid="orchard-visit-list">{visibleItems.map((item, index) => <OrchardVisitRow key={index} item={item} />)}</ul></section>
}
