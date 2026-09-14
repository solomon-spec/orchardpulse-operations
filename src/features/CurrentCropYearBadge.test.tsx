import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { CurrentCropYearBadge } from './CurrentCropYearBadge'

it('shows the initial crop year', () => {
  render(<CurrentCropYearBadge value={{ id: 'currentcropyear-1', label: '2026 Crop' }} />)
  expect(screen.getByText('2026 Crop')).toHaveAttribute('data-record-id', 'currentcropyear-1')
})
