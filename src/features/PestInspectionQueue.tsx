import { useState } from 'react'

interface PestInspectionItem { readonly id: string; readonly label: string; readonly detail: string }

const initialItems: PestInspectionItem[] = [
  { id: 'pest-inspection-1', label: 'Trap 14', detail: 'Ready' },
  { id: 'pest-inspection-2', label: 'Trap 22', detail: 'Review' },
]

function PestInspectionRow({ item }: { readonly item: PestInspectionItem }) {
  const [note, setNote] = useState('')
  return <li><div><strong>{item.label}</strong><span>{item.detail}</span></div><input aria-label={`Note for ${item.label}`} value={note} onChange={(event) => setNote(event.target.value)} /></li>
}

export function PestInspectionQueue() {
  const [reverse, setReverse] = useState(false)
  const visibleItems = reverse ? [...initialItems].reverse() : initialItems
  return <section className="workflow"><h2>Pest Inspection</h2><button type="button" onClick={() => setReverse((value) => !value)}>Reverse pest inspection order</button><ul data-testid="pest-inspection-list">{visibleItems.map((item, index) => <PestInspectionRow key={index} item={item} />)}</ul></section>
}
