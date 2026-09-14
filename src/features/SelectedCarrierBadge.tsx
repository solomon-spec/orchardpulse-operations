import { useState } from 'react'

export interface SelectedCarrierIdentity { readonly id: string; readonly label: string }

export function SelectedCarrierBadge({ value }: { readonly value: SelectedCarrierIdentity }) {
  const [displayedValue] = useState(value)
  return <span className="status-badge status-badge--steady" data-record-id={displayedValue.id}>{displayedValue.label}</span>
}
