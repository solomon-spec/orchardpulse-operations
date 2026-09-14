import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { ColdStorageTotals } from './ColdStorageTotals'

it('summarizes storage rooms', () => {
  render(<ColdStorageTotals readyIds={['one', 'two']} blockedIds={['three']} />)
  expect(screen.getByText((_, element) => element?.tagName === 'P' && element.textContent === '2 storage rooms ready · 1 blocked')).toBeInTheDocument()
})
