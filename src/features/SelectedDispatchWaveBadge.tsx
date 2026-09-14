import { useState } from 'react'

export interface SelectedDispatchWaveIdentity { readonly id: string; readonly label: string }

export function SelectedDispatchWaveBadge({ value }: { readonly value: SelectedDispatchWaveIdentity }) {
  const [displayedValue] = useState(value)
  return <span className="status-badge status-badge--steady" data-record-id={displayedValue.id}>{displayedValue.label}</span>
}
