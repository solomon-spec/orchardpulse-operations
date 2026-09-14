import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it } from 'vitest'
import { SprayIntervalControl } from './SprayIntervalControl'

it('updates the spray interval', async () => {
  const user = userEvent.setup()
  render(<SprayIntervalControl />)
  const input = screen.getByRole('spinbutton')
  await user.clear(input)
  await user.type(input, '11')
  expect(screen.getByText('11')).toBeInTheDocument()
})
