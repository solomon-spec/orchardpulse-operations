import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it } from 'vitest'
import { PollinationRouteBoard } from './PollinationRouteBoard'

it('reverses the pollination route order', async () => {
  const user = userEvent.setup()
  render(<PollinationRouteBoard />)
  const list = screen.getByTestId('pollination-route-list')
  expect([...list.querySelectorAll('strong')].map((node) => node.textContent)).toEqual(['Hive lane', 'Blossom lane'])
  await user.click(screen.getByRole('button', { name: 'Reverse pollination route order' }))
  expect([...list.querySelectorAll('strong')].map((node) => node.textContent)).toEqual(['Blossom lane', 'Hive lane'])
})
