import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it } from 'vitest'
import { HarvestBlockQueue } from './HarvestBlockQueue'

it('renders and reverses the harvest block queue', async () => {
  const user = userEvent.setup()
  render(<HarvestBlockQueue />)
  const list = screen.getByTestId('harvest-block-list')
  expect([...list.querySelectorAll('strong')].map((node) => node.textContent)).toEqual(['North Gala', 'River Honeycrisp', 'Hilltop Fuji'])
  await user.click(screen.getByRole('button', { name: 'Reverse picking order' }))
  expect([...list.querySelectorAll('strong')].map((node) => node.textContent)).toEqual(['Hilltop Fuji', 'River Honeycrisp', 'North Gala'])
})
