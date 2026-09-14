import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { SelectedCarrierBadge } from './SelectedCarrierBadge'

it('shows the initial carrier', () => {
  render(<SelectedCarrierBadge value={{ id: 'selectedcarrier-1', label: 'Northstar Freight' }} />)
  expect(screen.getByText('Northstar Freight')).toHaveAttribute('data-record-id', 'selectedcarrier-1')
})
