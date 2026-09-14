import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it } from 'vitest'
import { PestInspectionQueue } from './PestInspectionQueue'

it('reverses the pest inspection order', async () => {
  const user = userEvent.setup()
  render(<PestInspectionQueue />)
  const list = screen.getByTestId('pest-inspection-list')
  expect([...list.querySelectorAll('strong')].map((node) => node.textContent)).toEqual(['Trap 14', 'Trap 22'])
  await user.click(screen.getByRole('button', { name: 'Reverse pest inspection order' }))
  expect([...list.querySelectorAll('strong')].map((node) => node.textContent)).toEqual(['Trap 22', 'Trap 14'])
})
