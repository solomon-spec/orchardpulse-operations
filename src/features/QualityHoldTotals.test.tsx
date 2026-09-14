import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { QualityHoldTotals } from './QualityHoldTotals'

it('summarizes quality lots', () => {
  render(<QualityHoldTotals readyIds={['one', 'two']} blockedIds={['three']} />)
  expect(screen.getByText((_, element) => element?.tagName === 'P' && element.textContent === '2 quality lots ready · 1 blocked')).toBeInTheDocument()
})
