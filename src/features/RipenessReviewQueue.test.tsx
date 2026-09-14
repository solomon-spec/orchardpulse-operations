import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it } from 'vitest'
import { RipenessReviewQueue } from './RipenessReviewQueue'

it('reverses the ripeness review order', async () => {
  const user = userEvent.setup()
  render(<RipenessReviewQueue />)
  const list = screen.getByTestId('ripeness-review-list')
  expect([...list.querySelectorAll('strong')].map((node) => node.textContent)).toEqual(['Gala lot', 'Fuji lot'])
  await user.click(screen.getByRole('button', { name: 'Reverse ripeness review order' }))
  expect([...list.querySelectorAll('strong')].map((node) => node.textContent)).toEqual(['Fuji lot', 'Gala lot'])
})
