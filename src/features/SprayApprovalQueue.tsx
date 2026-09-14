import { useState } from 'react'

interface SprayApprovalItem { readonly id: string; readonly label: string; readonly detail: string }

const initialItems: SprayApprovalItem[] = [
  { id: 'spray-approval-1', label: 'North block', detail: 'Ready' },
  { id: 'spray-approval-2', label: 'River block', detail: 'Review' },
]

function SprayApprovalRow({ item }: { readonly item: SprayApprovalItem }) {
  const [note, setNote] = useState('')
  return <li><div><strong>{item.label}</strong><span>{item.detail}</span></div><input aria-label={`Note for ${item.label}`} value={note} onChange={(event) => setNote(event.target.value)} /></li>
}

export function SprayApprovalQueue() {
  const [reverse, setReverse] = useState(false)
  const visibleItems = reverse ? [...initialItems].reverse() : initialItems
  return <section className="workflow"><h2>Spray Approval</h2><button type="button" onClick={() => setReverse((value) => !value)}>Reverse spray approval order</button><ul data-testid="spray-approval-list">{visibleItems.map((item, index) => <SprayApprovalRow key={index} item={item} />)}</ul></section>
}
