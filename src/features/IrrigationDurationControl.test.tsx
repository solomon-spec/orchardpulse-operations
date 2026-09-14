import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it } from 'vitest'
import { IrrigationDurationControl } from './IrrigationDurationControl'

it('updates the irrigation duration', async () => {
  const user = userEvent.setup()
  render(<IrrigationDurationControl />)
  const input = screen.getByRole('spinbutton')
  await user.clear(input)
  await user.type(input, '46')
  expect(screen.getByText('46')).toBeInTheDocument()
})
