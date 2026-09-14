import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it } from 'vitest'
import { PackingExceptionQueue } from './PackingExceptionQueue'

it('reverses the packing exception order', async () => {
  const user = userEvent.setup()
  render(<PackingExceptionQueue />)
  const list = screen.getByTestId('packing-exception-list')
  expect([...list.querySelectorAll('strong')].map((node) => node.textContent)).toEqual(['Line Two', 'Line Four'])
  await user.click(screen.getByRole('button', { name: 'Reverse packing exception order' }))
  expect([...list.querySelectorAll('strong')].map((node) => node.textContent)).toEqual(['Line Four', 'Line Two'])
})
