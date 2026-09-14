import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it } from 'vitest'
import { OrchardVisitQueue } from './OrchardVisitQueue'

it('reverses the orchard visit order', async () => {
  const user = userEvent.setup()
  render(<OrchardVisitQueue />)
  const list = screen.getByTestId('orchard-visit-list')
  expect([...list.querySelectorAll('strong')].map((node) => node.textContent)).toEqual(['Grower Adams', 'Grower Brooks'])
  await user.click(screen.getByRole('button', { name: 'Reverse orchard visit order' }))
  expect([...list.querySelectorAll('strong')].map((node) => node.textContent)).toEqual(['Grower Brooks', 'Grower Adams'])
})
