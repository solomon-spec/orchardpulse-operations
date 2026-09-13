import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it } from 'vitest'
import { PackingLineSchedule } from './PackingLineSchedule'

it('renders and orders packing runs by start time', async () => {
  const user = userEvent.setup()
  render(<PackingLineSchedule />)
  const list = screen.getByTestId('packing-run-list')
  expect([...list.querySelectorAll('strong')].map((node) => node.textContent)).toEqual(['Bartlett pear', 'Gala apple', 'Fuji apple'])
  await user.click(screen.getByRole('button', { name: 'Sort by start time' }))
  expect([...list.querySelectorAll('strong')].map((node) => node.textContent)).toEqual(['Gala apple', 'Bartlett pear', 'Fuji apple'])
})
