import { useState } from 'react'

interface PackingExceptionItem { readonly id: string; readonly label: string; readonly detail: string }

const initialItems: PackingExceptionItem[] = [
  { id: 'packing-exception-1', label: 'Line Two', detail: 'Ready' },
  { id: 'packing-exception-2', label: 'Line Four', detail: 'Review' },
]

function PackingExceptionRow({ item }: { readonly item: PackingExceptionItem }) {
  const [note, setNote] = useState('')
  return <li><div><strong>{item.label}</strong><span>{item.detail}</span></div><input aria-label={`Note for ${item.label}`} value={note} onChange={(event) => setNote(event.target.value)} /></li>
}

export function PackingExceptionQueue() {
  const [reverse, setReverse] = useState(false)
  const visibleItems = reverse ? [...initialItems].reverse() : initialItems
  return <section className="workflow"><h2>Packing Exception</h2><button type="button" onClick={() => setReverse((value) => !value)}>Reverse packing exception order</button><ul data-testid="packing-exception-list">{visibleItems.map((item, index) => <PackingExceptionRow key={index} item={item} />)}</ul></section>
}
