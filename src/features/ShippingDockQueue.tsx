import { useState } from 'react'

interface ShippingDockItem { readonly id: string; readonly label: string; readonly detail: string }

const initialItems: ShippingDockItem[] = [
  { id: 'shipping-dock-1', label: 'Dock North', detail: 'Ready' },
  { id: 'shipping-dock-2', label: 'Dock South', detail: 'Review' },
]

function ShippingDockRow({ item }: { readonly item: ShippingDockItem }) {
  const [note, setNote] = useState('')
  return <li><div><strong>{item.label}</strong><span>{item.detail}</span></div><input aria-label={`Note for ${item.label}`} value={note} onChange={(event) => setNote(event.target.value)} /></li>
}

export function ShippingDockQueue() {
  const [reverse, setReverse] = useState(false)
  const visibleItems = reverse ? [...initialItems].reverse() : initialItems
  return <section className="workflow"><h2>Shipping Dock</h2><button type="button" onClick={() => setReverse((value) => !value)}>Reverse shipping dock order</button><ul data-testid="shipping-dock-list">{visibleItems.map((item, index) => <ShippingDockRow key={index} item={item} />)}</ul></section>
}
