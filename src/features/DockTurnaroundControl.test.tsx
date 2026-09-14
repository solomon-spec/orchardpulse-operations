import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it } from 'vitest'
import { DockTurnaroundControl } from './DockTurnaroundControl'

it('updates the dock turnaround', async () => {
  const user = userEvent.setup()
  render(<DockTurnaroundControl />)
  const input = screen.getByRole('spinbutton')
  await user.clear(input)
  await user.type(input, '31')
  expect(screen.getByText('31')).toBeInTheDocument()
})
