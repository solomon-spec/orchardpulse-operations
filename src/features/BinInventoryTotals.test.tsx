import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { BinInventoryTotals } from './BinInventoryTotals'

it('summarizes inventory bins', () => {
  render(<BinInventoryTotals readyIds={['one', 'two']} blockedIds={['three']} />)
  expect(screen.getByText((_, element) => element?.tagName === 'P' && element.textContent === '2 inventory bins ready · 1 blocked')).toBeInTheDocument()
})
