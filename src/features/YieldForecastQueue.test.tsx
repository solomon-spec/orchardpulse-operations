import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it } from 'vitest'
import { YieldForecastQueue } from './YieldForecastQueue'

it('reverses the yield forecast order', async () => {
  const user = userEvent.setup()
  render(<YieldForecastQueue />)
  const list = screen.getByTestId('yield-forecast-list')
  expect([...list.querySelectorAll('strong')].map((node) => node.textContent)).toEqual(['Forecast Week 1', 'Forecast Week 3'])
  await user.click(screen.getByRole('button', { name: 'Reverse yield forecast order' }))
  expect([...list.querySelectorAll('strong')].map((node) => node.textContent)).toEqual(['Forecast Week 3', 'Forecast Week 1'])
})
