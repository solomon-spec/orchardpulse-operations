import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it } from 'vitest'
import { StorageHumidityControl } from './StorageHumidityControl'

it('updates the storage humidity', async () => {
  const user = userEvent.setup()
  render(<StorageHumidityControl />)
  const input = screen.getByRole('spinbutton')
  await user.clear(input)
  await user.type(input, '89')
  expect(screen.getByText('89')).toBeInTheDocument()
})
