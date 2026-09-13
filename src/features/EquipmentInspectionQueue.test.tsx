import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it } from 'vitest'
import { EquipmentInspectionQueue } from './EquipmentInspectionQueue'

it('renders and reverses equipment inspections', async () => {
  const user = userEvent.setup()
  render(<EquipmentInspectionQueue />)
  const list = screen.getByTestId('equipment-list')
  expect([...list.querySelectorAll('strong')].map((node) => node.textContent)).toEqual(['Orchard lift 7', 'Tractor 2', 'Sprayer 4'])
  await user.click(screen.getByRole('button', { name: 'Reverse inspection order' }))
  expect([...list.querySelectorAll('strong')].map((node) => node.textContent)).toEqual(['Sprayer 4', 'Tractor 2', 'Orchard lift 7'])
})
