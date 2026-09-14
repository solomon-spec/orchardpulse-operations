import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it } from 'vitest'
import { SoilSampleQueue } from './SoilSampleQueue'

it('reverses the soil sample order', async () => {
  const user = userEvent.setup()
  render(<SoilSampleQueue />)
  const list = screen.getByTestId('soil-sample-list')
  expect([...list.querySelectorAll('strong')].map((node) => node.textContent)).toEqual(['Sample East', 'Sample West'])
  await user.click(screen.getByRole('button', { name: 'Reverse soil sample order' }))
  expect([...list.querySelectorAll('strong')].map((node) => node.textContent)).toEqual(['Sample West', 'Sample East'])
})
