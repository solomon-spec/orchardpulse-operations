import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it } from 'vitest'
import { OrchardAlertFeed } from './OrchardAlertFeed'

it('renders and prioritizes operational alerts', async () => {
  const user = userEvent.setup()
  render(<OrchardAlertFeed />)
  const list = screen.getByTestId('orchard-alert-list')
  expect([...list.querySelectorAll('strong')].map((node) => node.textContent)).toEqual(['Wind advisory', 'Cooler door open', 'Fuel delivery delayed'])
  await user.click(screen.getByRole('button', { name: 'Prioritize severity' }))
  expect([...list.querySelectorAll('strong')].map((node) => node.textContent)).toEqual(['Cooler door open', 'Wind advisory', 'Fuel delivery delayed'])
})
