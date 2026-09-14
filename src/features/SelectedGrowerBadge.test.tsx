import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { SelectedGrowerBadge } from './SelectedGrowerBadge'

it('shows the initial grower', () => {
  render(<SelectedGrowerBadge value={{ id: 'selectedgrower-1', label: 'Maya Orchard' }} />)
  expect(screen.getByText('Maya Orchard')).toHaveAttribute('data-record-id', 'selectedgrower-1')
})
