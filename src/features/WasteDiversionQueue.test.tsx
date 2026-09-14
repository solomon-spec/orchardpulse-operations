import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it } from 'vitest'
import { WasteDiversionQueue } from './WasteDiversionQueue'

it('reverses the waste diversion order', async () => {
  const user = userEvent.setup()
  render(<WasteDiversionQueue />)
  const list = screen.getByTestId('waste-diversion-list')
  expect([...list.querySelectorAll('strong')].map((node) => node.textContent)).toEqual(['Compost stream', 'Feed stream'])
  await user.click(screen.getByRole('button', { name: 'Reverse waste diversion order' }))
  expect([...list.querySelectorAll('strong')].map((node) => node.textContent)).toEqual(['Feed stream', 'Compost stream'])
})
