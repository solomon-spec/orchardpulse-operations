import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { PackingThroughputTotals } from './PackingThroughputTotals'

it('summarizes packing runs', () => {
  render(<PackingThroughputTotals readyIds={['one', 'two']} blockedIds={['three']} />)
  expect(screen.getByText((_, element) => element?.tagName === 'P' && element.textContent === '2 packing runs ready · 1 blocked')).toBeInTheDocument()
})
