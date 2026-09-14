import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { HarvestReadinessTotals } from './HarvestReadinessTotals'

it('summarizes harvest lots', () => {
  render(<HarvestReadinessTotals readyIds={['one', 'two']} blockedIds={['three']} />)
  expect(screen.getByText((_, element) => element?.tagName === 'P' && element.textContent === '2 harvest lots ready · 1 blocked')).toBeInTheDocument()
})
