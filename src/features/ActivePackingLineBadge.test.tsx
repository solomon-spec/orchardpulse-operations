import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { ActivePackingLineBadge } from './ActivePackingLineBadge'

it('shows the initial packing line', () => {
  render(<ActivePackingLineBadge value={{ id: 'activepackingline-1', label: 'Line Three' }} />)
  expect(screen.getByText('Line Three')).toHaveAttribute('data-record-id', 'activepackingline-1')
})
