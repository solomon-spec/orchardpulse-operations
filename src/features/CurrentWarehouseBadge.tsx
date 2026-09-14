import { useState } from 'react'

export interface CurrentWarehouseIdentity { readonly id: string; readonly label: string }

export function CurrentWarehouseBadge({ value }: { readonly value: CurrentWarehouseIdentity }) {
  const [displayedValue] = useState(value)
  return <span className="status-badge status-badge--steady" data-record-id={displayedValue.id}>{displayedValue.label}</span>
}
