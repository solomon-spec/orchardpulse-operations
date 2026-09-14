import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { IrrigationDemandTotals } from './IrrigationDemandTotals'

it('summarizes irrigation zones', () => {
  render(<IrrigationDemandTotals readyIds={['one', 'two']} blockedIds={['three']} />)
  expect(screen.getByText((_, element) => element?.tagName === 'P' && element.textContent === '2 irrigation zones ready · 1 blocked')).toBeInTheDocument()
})
