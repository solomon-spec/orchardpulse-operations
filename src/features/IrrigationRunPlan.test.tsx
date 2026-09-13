import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it } from 'vitest'
import { IrrigationRunPlan } from './IrrigationRunPlan'

it('renders and reverses the irrigation run plan', async () => {
  const user = userEvent.setup()
  render(<IrrigationRunPlan />)
  const list = screen.getByTestId('irrigation-zone-list')
  expect([...list.querySelectorAll('strong')].map((node) => node.textContent)).toEqual(['East slope', 'Creek row', 'Upper bench'])
  await user.click(screen.getByRole('button', { name: 'Reverse zone order' }))
  expect([...list.querySelectorAll('strong')].map((node) => node.textContent)).toEqual(['Upper bench', 'Creek row', 'East slope'])
})
