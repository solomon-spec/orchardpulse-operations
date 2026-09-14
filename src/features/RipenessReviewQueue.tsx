import { useState } from 'react'

interface RipenessReviewItem { readonly id: string; readonly label: string; readonly detail: string }

const initialItems: RipenessReviewItem[] = [
  { id: 'ripeness-review-1', label: 'Gala lot', detail: 'Ready' },
  { id: 'ripeness-review-2', label: 'Fuji lot', detail: 'Review' },
]

function RipenessReviewRow({ item }: { readonly item: RipenessReviewItem }) {
  const [note, setNote] = useState('')
  return <li><div><strong>{item.label}</strong><span>{item.detail}</span></div><input aria-label={`Note for ${item.label}`} value={note} onChange={(event) => setNote(event.target.value)} /></li>
}

export function RipenessReviewQueue() {
  const [reverse, setReverse] = useState(false)
  const visibleItems = reverse ? [...initialItems].reverse() : initialItems
  return <section className="workflow"><h2>Ripeness Review</h2><button type="button" onClick={() => setReverse((value) => !value)}>Reverse ripeness review order</button><ul data-testid="ripeness-review-list">{visibleItems.map((item, index) => <RipenessReviewRow key={index} item={item} />)}</ul></section>
}
