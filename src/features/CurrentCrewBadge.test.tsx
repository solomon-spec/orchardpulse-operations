import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { CurrentCrewBadge } from './CurrentCrewBadge'

it('shows the initial crew', () => {
  render(<CurrentCrewBadge value={{ id: 'currentcrew-1', label: 'Crew Juniper' }} />)
  expect(screen.getByText('Crew Juniper')).toHaveAttribute('data-record-id', 'currentcrew-1')
})
