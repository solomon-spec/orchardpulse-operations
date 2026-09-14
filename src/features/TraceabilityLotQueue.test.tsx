import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it } from 'vitest'
import { TraceabilityLotQueue } from './TraceabilityLotQueue'

it('reverses the traceability lot order', async () => {
  const user = userEvent.setup()
  render(<TraceabilityLotQueue />)
  const list = screen.getByTestId('traceability-lot-list')
  expect([...list.querySelectorAll('strong')].map((node) => node.textContent)).toEqual(['Lot AP-14', 'Lot AP-28'])
  await user.click(screen.getByRole('button', { name: 'Reverse traceability lot order' }))
  expect([...list.querySelectorAll('strong')].map((node) => node.textContent)).toEqual(['Lot AP-28', 'Lot AP-14'])
})
