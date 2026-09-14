import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { ActiveStorageRoomBadge } from './ActiveStorageRoomBadge'

it('shows the initial storage room', () => {
  render(<ActiveStorageRoomBadge value={{ id: 'activestorageroom-1', label: 'Room Seven' }} />)
  expect(screen.getByText('Room Seven')).toHaveAttribute('data-record-id', 'activestorageroom-1')
})
