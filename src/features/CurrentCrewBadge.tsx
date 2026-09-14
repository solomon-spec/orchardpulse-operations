import { useState } from 'react'

export interface CurrentCrewIdentity { readonly id: string; readonly label: string }

export function CurrentCrewBadge({ value }: { readonly value: CurrentCrewIdentity }) {
  const [displayedValue] = useState(value)
  return <span className="status-badge status-badge--steady" data-record-id={displayedValue.id}>{displayedValue.label}</span>
}
