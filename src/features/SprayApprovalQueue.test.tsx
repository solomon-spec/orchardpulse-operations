import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it } from 'vitest'
import { SprayApprovalQueue } from './SprayApprovalQueue'

it('reverses the spray approval order', async () => {
  const user = userEvent.setup()
  render(<SprayApprovalQueue />)
  const list = screen.getByTestId('spray-approval-list')
  expect([...list.querySelectorAll('strong')].map((node) => node.textContent)).toEqual(['North block', 'River block'])
  await user.click(screen.getByRole('button', { name: 'Reverse spray approval order' }))
  expect([...list.querySelectorAll('strong')].map((node) => node.textContent)).toEqual(['River block', 'North block'])
})
