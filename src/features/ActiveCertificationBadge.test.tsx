import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { ActiveCertificationBadge } from './ActiveCertificationBadge'

it('shows the initial certification', () => {
  render(<ActiveCertificationBadge value={{ id: 'activecertification-1', label: 'Organic Lot' }} />)
  expect(screen.getByText('Organic Lot')).toHaveAttribute('data-record-id', 'activecertification-1')
})
