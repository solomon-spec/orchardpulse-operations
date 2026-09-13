import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it } from 'vitest'
import { CrewShiftBoard } from './CrewShiftBoard'

it('renders and sorts crews by lead', async () => {
  const user = userEvent.setup()
  render(<CrewShiftBoard />)
  const list = screen.getByTestId('crew-shift-list')
  expect([...list.querySelectorAll('strong')].map((node) => node.textContent)).toEqual(['Amber Crew', 'Blue Crew', 'Cider Crew'])
  await user.click(screen.getByRole('button', { name: 'Sort by lead' }))
  expect([...list.querySelectorAll('strong')].map((node) => node.textContent)).toEqual(['Cider Crew', 'Amber Crew', 'Blue Crew'])
})
