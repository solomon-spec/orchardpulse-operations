import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { ShipmentSealTotals } from './ShipmentSealTotals'

it('summarizes shipment seals', () => {
  render(<ShipmentSealTotals readyIds={['one', 'two']} blockedIds={['three']} />)
  expect(screen.getByText((_, element) => element?.tagName === 'P' && element.textContent === '2 shipment seals ready · 1 blocked')).toBeInTheDocument()
})
