import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { StatusBadge } from './StatusBadge'

it('renders a labelled operational state', () => {
  render(<StatusBadge label="Cooling stable" tone="steady" />)
  expect(screen.getByText('Cooling stable')).toHaveClass('status-badge--steady')
})
