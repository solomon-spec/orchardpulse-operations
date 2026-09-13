import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { WorkflowIndex } from './WorkflowIndex'

it('links operators to each workflow section', () => {
  render(<WorkflowIndex />)
  expect(screen.getByRole('navigation', { name: 'Operational workflows' })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: 'Harvest' })).toHaveAttribute('href', '#harvest-blocks-heading')
  expect(screen.getByRole('link', { name: 'Deliveries' })).toHaveAttribute('href', '#delivery-heading')
})
