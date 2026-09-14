import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { TraceabilityReviewTotals } from './TraceabilityReviewTotals'

it('summarizes traceability lots', () => {
  render(<TraceabilityReviewTotals readyIds={['one', 'two']} blockedIds={['three']} />)
  expect(screen.getByText((_, element) => element?.tagName === 'P' && element.textContent === '2 traceability lots ready · 1 blocked')).toBeInTheDocument()
})
