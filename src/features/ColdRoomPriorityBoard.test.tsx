import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it } from 'vitest'
import { ColdRoomPriorityBoard } from './ColdRoomPriorityBoard'

it('renders and sorts cold-room priorities', async () => {
  const user = userEvent.setup()
  render(<ColdRoomPriorityBoard />)
  const list = screen.getByTestId('cold-room-list')
  expect([...list.querySelectorAll('strong')].map((node) => node.textContent)).toEqual(['Maple 1', 'Cedar 3', 'Birch 2'])
  await user.click(screen.getByRole('button', { name: 'Sort coldest first' }))
  expect([...list.querySelectorAll('strong')].map((node) => node.textContent)).toEqual(['Cedar 3', 'Birch 2', 'Maple 1'])
})
