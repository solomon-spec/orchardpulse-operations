import { useState } from 'react'

interface PollinationRouteItem { readonly id: string; readonly label: string; readonly detail: string }

const initialItems: PollinationRouteItem[] = [
  { id: 'pollination-route-1', label: 'Hive lane', detail: 'Ready' },
  { id: 'pollination-route-2', label: 'Blossom lane', detail: 'Review' },
]

function PollinationRouteRow({ item }: { readonly item: PollinationRouteItem }) {
  const [note, setNote] = useState('')
  return <li><div><strong>{item.label}</strong><span>{item.detail}</span></div><input aria-label={`Note for ${item.label}`} value={note} onChange={(event) => setNote(event.target.value)} /></li>
}

export function PollinationRouteBoard() {
  const [reverse, setReverse] = useState(false)
  const visibleItems = reverse ? [...initialItems].reverse() : initialItems
  return <section className="workflow"><h2>Pollination Route</h2><button type="button" onClick={() => setReverse((value) => !value)}>Reverse pollination route order</button><ul data-testid="pollination-route-list">{visibleItems.map((item, index) => <PollinationRouteRow key={index} item={item} />)}</ul></section>
}
