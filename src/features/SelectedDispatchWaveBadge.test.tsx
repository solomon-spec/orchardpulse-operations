import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { SelectedDispatchWaveBadge } from './SelectedDispatchWaveBadge'

it('shows the initial dispatch wave', () => {
  render(<SelectedDispatchWaveBadge value={{ id: 'selecteddispatchwave-1', label: 'Wave 04' }} />)
  expect(screen.getByText('Wave 04')).toHaveAttribute('data-record-id', 'selecteddispatchwave-1')
})
