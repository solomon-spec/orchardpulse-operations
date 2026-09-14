import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it } from 'vitest'
import { PruningCrewQueue } from './PruningCrewQueue'

it('reverses the pruning crew order', async () => {
  const user = userEvent.setup()
  render(<PruningCrewQueue />)
  const list = screen.getByTestId('pruning-crew-list')
  expect([...list.querySelectorAll('strong')].map((node) => node.textContent)).toEqual(['Crew Cedar', 'Crew Maple'])
  await user.click(screen.getByRole('button', { name: 'Reverse pruning crew order' }))
  expect([...list.querySelectorAll('strong')].map((node) => node.textContent)).toEqual(['Crew Maple', 'Crew Cedar'])
})
