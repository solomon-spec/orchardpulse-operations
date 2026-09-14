import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { ActiveCultivarBadge } from './ActiveCultivarBadge'

it('shows the initial cultivar', () => {
  render(<ActiveCultivarBadge value={{ id: 'activecultivar-1', label: 'Honeycrisp' }} />)
  expect(screen.getByText('Honeycrisp')).toHaveAttribute('data-record-id', 'activecultivar-1')
})
