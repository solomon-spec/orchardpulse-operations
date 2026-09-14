import { useState } from 'react'

interface BinTransferItem { readonly id: string; readonly label: string; readonly detail: string }

const initialItems: BinTransferItem[] = [
  { id: 'bin-transfer-1', label: 'Bay A', detail: 'Ready' },
  { id: 'bin-transfer-2', label: 'Bay C', detail: 'Review' },
]

function BinTransferRow({ item }: { readonly item: BinTransferItem }) {
  const [note, setNote] = useState('')
  return <li><div><strong>{item.label}</strong><span>{item.detail}</span></div><input aria-label={`Note for ${item.label}`} value={note} onChange={(event) => setNote(event.target.value)} /></li>
}

export function BinTransferQueue() {
  const [reverse, setReverse] = useState(false)
  const visibleItems = reverse ? [...initialItems].reverse() : initialItems
  return <section className="workflow"><h2>Bin Transfer</h2><button type="button" onClick={() => setReverse((value) => !value)}>Reverse bin transfer order</button><ul data-testid="bin-transfer-list">{visibleItems.map((item, index) => <BinTransferRow key={index} item={item} />)}</ul></section>
}
