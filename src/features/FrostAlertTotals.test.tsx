import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { FrostAlertTotals } from './FrostAlertTotals'

it('summarizes frost alerts', () => {
  render(<FrostAlertTotals readyIds={['one', 'two']} blockedIds={['three']} />)
  expect(screen.getByText((_, element) => element?.tagName === 'P' && element.textContent === '2 frost alerts ready · 1 blocked')).toBeInTheDocument()
})
