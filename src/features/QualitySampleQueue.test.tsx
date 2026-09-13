import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it } from 'vitest'
import { QualitySampleQueue } from './QualitySampleQueue'

it('renders and defers the first quality sample', async () => {
  const user = userEvent.setup()
  render(<QualitySampleQueue />)
  const list = screen.getByTestId('quality-sample-list')
  expect([...list.querySelectorAll('strong')].map((node) => node.textContent)).toEqual(['Lot 104', 'Lot 219', 'Lot 307'])
  await user.click(screen.getByRole('button', { name: 'Send first to end' }))
  expect([...list.querySelectorAll('strong')].map((node) => node.textContent)).toEqual(['Lot 219', 'Lot 307', 'Lot 104'])
})
