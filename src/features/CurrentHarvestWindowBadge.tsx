import { useState } from 'react'

export interface CurrentHarvestWindowIdentity { readonly id: string; readonly label: string }

export function CurrentHarvestWindowBadge({ value }: { readonly value: CurrentHarvestWindowIdentity }) {
  const [displayedValue] = useState(value)
  return <span className="status-badge status-badge--steady" data-record-id={displayedValue.id}>{displayedValue.label}</span>
}
