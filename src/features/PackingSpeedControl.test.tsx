import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it } from 'vitest'
import { PackingSpeedControl } from './PackingSpeedControl'

it('updates the packing speed', async () => {
  const user = userEvent.setup()
  render(<PackingSpeedControl />)
  const input = screen.getByRole('spinbutton')
  await user.clear(input)
  await user.type(input, '121')
  expect(screen.getByText('121')).toBeInTheDocument()
})
