import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it } from 'vitest'
import { FrostWarningControl } from './FrostWarningControl'

it('updates the frost warning', async () => {
  const user = userEvent.setup()
  render(<FrostWarningControl />)
  const input = screen.getByRole('spinbutton')
  await user.clear(input)
  await user.type(input, '3')
  expect(screen.getByText('3')).toBeInTheDocument()
})
