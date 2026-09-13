import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it } from 'vitest'
import { GrowerDeliveryBoard } from './GrowerDeliveryBoard'

it('renders and defers the first grower delivery', async () => {
  const user = userEvent.setup()
  render(<GrowerDeliveryBoard />)
  const list = screen.getByTestId('delivery-list')
  expect([...list.querySelectorAll('strong')].map((node) => node.textContent)).toEqual(['Canyon Orchard', 'Meadow Fruit', 'Sunrise Acres'])
  await user.click(screen.getByRole('button', { name: 'Move first delivery to end' }))
  expect([...list.querySelectorAll('strong')].map((node) => node.textContent)).toEqual(['Meadow Fruit', 'Sunrise Acres', 'Canyon Orchard'])
})
