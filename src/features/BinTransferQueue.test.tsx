import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it } from 'vitest'
import { BinTransferQueue } from './BinTransferQueue'

it('reverses the bin transfer order', async () => {
  const user = userEvent.setup()
  render(<BinTransferQueue />)
  const list = screen.getByTestId('bin-transfer-list')
  expect([...list.querySelectorAll('strong')].map((node) => node.textContent)).toEqual(['Bay A', 'Bay C'])
  await user.click(screen.getByRole('button', { name: 'Reverse bin transfer order' }))
  expect([...list.querySelectorAll('strong')].map((node) => node.textContent)).toEqual(['Bay C', 'Bay A'])
})
