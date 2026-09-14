import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it } from 'vitest'
import { WaterAllocationBoard } from './WaterAllocationBoard'

it('reverses the water allocation order', async () => {
  const user = userEvent.setup()
  render(<WaterAllocationBoard />)
  const list = screen.getByTestId('water-allocation-list')
  expect([...list.querySelectorAll('strong')].map((node) => node.textContent)).toEqual(['Zone Alpha', 'Zone Gamma'])
  await user.click(screen.getByRole('button', { name: 'Reverse water allocation order' }))
  expect([...list.querySelectorAll('strong')].map((node) => node.textContent)).toEqual(['Zone Gamma', 'Zone Alpha'])
})
