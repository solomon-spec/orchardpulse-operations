import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { PestTrapTotals } from './PestTrapTotals'

it('summarizes pest traps', () => {
  render(<PestTrapTotals readyIds={['one', 'two']} blockedIds={['three']} />)
  expect(screen.getByText((_, element) => element?.tagName === 'P' && element.textContent === '2 pest traps ready · 1 blocked')).toBeInTheDocument()
})
