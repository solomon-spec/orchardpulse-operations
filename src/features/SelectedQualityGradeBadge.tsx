import { useState } from 'react'

export interface SelectedQualityGradeIdentity { readonly id: string; readonly label: string }

export function SelectedQualityGradeBadge({ value }: { readonly value: SelectedQualityGradeIdentity }) {
  const [displayedValue] = useState(value)
  return <span className="status-badge status-badge--steady" data-record-id={displayedValue.id}>{displayedValue.label}</span>
}
