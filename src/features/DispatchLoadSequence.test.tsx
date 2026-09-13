import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it } from 'vitest'
import { DispatchLoadSequence } from './DispatchLoadSequence'

it('renders and defers the first dispatch load', async () => {
  const user = userEvent.setup()
  render(<DispatchLoadSequence />)
  const list = screen.getByTestId('dispatch-load-list')
  expect([...list.querySelectorAll('strong')].map((node) => node.textContent)).toEqual(['Load 41', 'Load 56', 'Load 63'])
  await user.click(screen.getByRole('button', { name: 'Defer first load' }))
  expect([...list.querySelectorAll('strong')].map((node) => node.textContent)).toEqual(['Load 56', 'Load 63', 'Load 41'])
})
