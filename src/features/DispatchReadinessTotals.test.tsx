import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { DispatchReadinessTotals } from './DispatchReadinessTotals'

it('summarizes dispatch loads', () => {
  render(<DispatchReadinessTotals readyIds={['one', 'two']} blockedIds={['three']} />)
  expect(screen.getByText((_, element) => element?.tagName === 'P' && element.textContent === '2 dispatch loads ready · 1 blocked')).toBeInTheDocument()
})
