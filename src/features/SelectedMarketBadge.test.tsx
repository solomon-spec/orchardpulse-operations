import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { SelectedMarketBadge } from './SelectedMarketBadge'

it('shows the initial market', () => {
  render(<SelectedMarketBadge value={{ id: 'selectedmarket-1', label: 'Regional Export' }} />)
  expect(screen.getByText('Regional Export')).toHaveAttribute('data-record-id', 'selectedmarket-1')
})
