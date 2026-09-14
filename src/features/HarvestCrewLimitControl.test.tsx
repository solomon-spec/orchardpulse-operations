import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it } from 'vitest'
import { HarvestCrewLimitControl } from './HarvestCrewLimitControl'

it('updates the harvest crew limit', async () => {
  const user = userEvent.setup()
  render(<HarvestCrewLimitControl />)
  const input = screen.getByRole('spinbutton')
  await user.clear(input)
  await user.type(input, '9')
  expect(screen.getByText('9')).toBeInTheDocument()
})
