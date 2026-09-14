import { useState } from 'react'

export interface ActivePackingLineIdentity { readonly id: string; readonly label: string }

export function ActivePackingLineBadge({ value }: { readonly value: ActivePackingLineIdentity }) {
  const [displayedValue] = useState(value)
  return <span className="status-badge status-badge--steady" data-record-id={displayedValue.id}>{displayedValue.label}</span>
}
