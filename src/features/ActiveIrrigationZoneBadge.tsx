import { useState } from 'react'

export interface ActiveIrrigationZoneIdentity { readonly id: string; readonly label: string }

export function ActiveIrrigationZoneBadge({ value }: { readonly value: ActiveIrrigationZoneIdentity }) {
  const [displayedValue] = useState(value)
  return <span className="status-badge status-badge--steady" data-record-id={displayedValue.id}>{displayedValue.label}</span>
}
