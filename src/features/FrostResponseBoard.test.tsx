import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it } from 'vitest'
import { FrostResponseBoard } from './FrostResponseBoard'

it('reverses the frost response order', async () => {
  const user = userEvent.setup()
  render(<FrostResponseBoard />)
  const list = screen.getByTestId('frost-response-list')
  expect([...list.querySelectorAll('strong')].map((node) => node.textContent)).toEqual(['Tower 1', 'Tower 3'])
  await user.click(screen.getByRole('button', { name: 'Reverse frost response order' }))
  expect([...list.querySelectorAll('strong')].map((node) => node.textContent)).toEqual(['Tower 3', 'Tower 1'])
})
