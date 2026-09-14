import { useState } from 'react'

export interface SelectedGrowerIdentity { readonly id: string; readonly label: string }

export function SelectedGrowerBadge({ value }: { readonly value: SelectedGrowerIdentity }) {
  const [displayedValue] = useState(value)
  return <span className="status-badge status-badge--steady" data-record-id={displayedValue.id}>{displayedValue.label}</span>
}
