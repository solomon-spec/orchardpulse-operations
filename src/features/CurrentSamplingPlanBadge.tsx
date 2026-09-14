import { useState } from 'react'

export interface CurrentSamplingPlanIdentity { readonly id: string; readonly label: string }

export function CurrentSamplingPlanBadge({ value }: { readonly value: CurrentSamplingPlanIdentity }) {
  const [displayedValue] = useState(value)
  return <span className="status-badge status-badge--steady" data-record-id={displayedValue.id}>{displayedValue.label}</span>
}
