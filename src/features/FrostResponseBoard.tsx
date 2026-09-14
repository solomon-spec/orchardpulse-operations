import { useState } from 'react'

interface FrostResponseItem { readonly id: string; readonly label: string; readonly detail: string }

const initialItems: FrostResponseItem[] = [
  { id: 'frost-response-1', label: 'Tower 1', detail: 'Ready' },
  { id: 'frost-response-2', label: 'Tower 3', detail: 'Review' },
]

function FrostResponseRow({ item }: { readonly item: FrostResponseItem }) {
  const [note, setNote] = useState('')
  return <li><div><strong>{item.label}</strong><span>{item.detail}</span></div><input aria-label={`Note for ${item.label}`} value={note} onChange={(event) => setNote(event.target.value)} /></li>
}

export function FrostResponseBoard() {
  const [reverse, setReverse] = useState(false)
  const visibleItems = reverse ? [...initialItems].reverse() : initialItems
  return <section className="workflow"><h2>Frost Response</h2><button type="button" onClick={() => setReverse((value) => !value)}>Reverse frost response order</button><ul data-testid="frost-response-list">{visibleItems.map((item, index) => <FrostResponseRow key={index} item={item} />)}</ul></section>
}
