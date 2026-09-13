type StatusBadgeProps = {
  label: string
  tone?: 'steady' | 'attention'
}

export function StatusBadge({ label, tone = 'steady' }: StatusBadgeProps) {
  return <span className={`status-badge status-badge--${tone}`}>{label}</span>
}
