import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { GrowerDeliveryTotals } from './GrowerDeliveryTotals'

it('summarizes grower deliveries', () => {
  render(<GrowerDeliveryTotals readyIds={['one', 'two']} blockedIds={['three']} />)
  expect(screen.getByText((_, element) => element?.tagName === 'P' && element.textContent === '2 grower deliveries ready · 1 blocked')).toBeInTheDocument()
})
