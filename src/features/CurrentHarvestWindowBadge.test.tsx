import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { CurrentHarvestWindowBadge } from './CurrentHarvestWindowBadge'

it('shows the initial harvest window', () => {
  render(<CurrentHarvestWindowBadge value={{ id: 'currentharvestwindow-1', label: 'Morning Window' }} />)
  expect(screen.getByText('Morning Window')).toHaveAttribute('data-record-id', 'currentharvestwindow-1')
})
