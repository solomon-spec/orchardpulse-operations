import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { OrchardAuditTotals } from './OrchardAuditTotals'

it('summarizes orchard audits', () => {
  render(<OrchardAuditTotals readyIds={['one', 'two']} blockedIds={['three']} />)
  expect(screen.getByText((_, element) => element?.tagName === 'P' && element.textContent === '2 orchard audits ready · 1 blocked')).toBeInTheDocument()
})
