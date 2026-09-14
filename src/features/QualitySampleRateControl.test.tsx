import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it } from 'vitest'
import { QualitySampleRateControl } from './QualitySampleRateControl'

it('updates the quality sample rate', async () => {
  const user = userEvent.setup()
  render(<QualitySampleRateControl />)
  const input = screen.getByRole('spinbutton')
  await user.clear(input)
  await user.type(input, '13')
  expect(screen.getByText('13')).toBeInTheDocument()
})
