import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it } from 'vitest'
import { ColdRoomLimitControl } from './ColdRoomLimitControl'

it('updates the cold room limit', async () => {
  const user = userEvent.setup()
  render(<ColdRoomLimitControl />)
  const input = screen.getByRole('spinbutton')
  await user.clear(input)
  await user.type(input, '4')
  expect(screen.getByText('4')).toBeInTheDocument()
})
