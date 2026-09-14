import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { SelectedQualityGradeBadge } from './SelectedQualityGradeBadge'

it('shows the initial quality grade', () => {
  render(<SelectedQualityGradeBadge value={{ id: 'selectedqualitygrade-1', label: 'Extra Fancy' }} />)
  expect(screen.getByText('Extra Fancy')).toHaveAttribute('data-record-id', 'selectedqualitygrade-1')
})
