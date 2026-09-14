import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it } from 'vitest'
import { ShippingDockQueue } from './ShippingDockQueue'

it('reverses the shipping dock order', async () => {
  const user = userEvent.setup()
  render(<ShippingDockQueue />)
  const list = screen.getByTestId('shipping-dock-list')
  expect([...list.querySelectorAll('strong')].map((node) => node.textContent)).toEqual(['Dock North', 'Dock South'])
  await user.click(screen.getByRole('button', { name: 'Reverse shipping dock order' }))
  expect([...list.querySelectorAll('strong')].map((node) => node.textContent)).toEqual(['Dock South', 'Dock North'])
})
