import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it } from 'vitest'
import { BrixThresholdControl } from './BrixThresholdControl'

it('updates the brix threshold', async () => {
  const user = userEvent.setup()
  render(<BrixThresholdControl />)
  const input = screen.getByRole('spinbutton')
  await user.clear(input)
  await user.type(input, '15')
  expect(screen.getByText('15')).toBeInTheDocument()
})
