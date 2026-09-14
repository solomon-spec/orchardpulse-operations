import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { ActiveIrrigationZoneBadge } from './ActiveIrrigationZoneBadge'

it('shows the initial irrigation zone', () => {
  render(<ActiveIrrigationZoneBadge value={{ id: 'activeirrigationzone-1', label: 'River Zone' }} />)
  expect(screen.getByText('River Zone')).toHaveAttribute('data-record-id', 'activeirrigationzone-1')
})
