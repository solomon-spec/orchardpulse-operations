import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { EquipmentServiceTotals } from './EquipmentServiceTotals'

it('summarizes equipment records', () => {
  render(<EquipmentServiceTotals readyIds={['one', 'two']} blockedIds={['three']} />)
  expect(screen.getByText((_, element) => element?.tagName === 'P' && element.textContent === '2 equipment records ready · 1 blocked')).toBeInTheDocument()
})
