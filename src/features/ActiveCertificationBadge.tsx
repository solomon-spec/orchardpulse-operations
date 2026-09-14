import { useState } from 'react'

export interface ActiveCertificationIdentity { readonly id: string; readonly label: string }

export function ActiveCertificationBadge({ value }: { readonly value: ActiveCertificationIdentity }) {
  const [displayedValue] = useState(value)
  return <span className="status-badge status-badge--steady" data-record-id={displayedValue.id}>{displayedValue.label}</span>
}
