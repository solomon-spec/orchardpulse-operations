import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { CrewCoverageTotals } from './CrewCoverageTotals'

it('summarizes crew shifts', () => {
  render(<CrewCoverageTotals readyIds={['one', 'two']} blockedIds={['three']} />)
  expect(screen.getByText((_, element) => element?.tagName === 'P' && element.textContent === '2 crew shifts ready · 1 blocked')).toBeInTheDocument()
})
