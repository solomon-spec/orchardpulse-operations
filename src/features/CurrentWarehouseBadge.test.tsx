import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { CurrentWarehouseBadge } from './CurrentWarehouseBadge'

it('shows the initial warehouse', () => {
  render(<CurrentWarehouseBadge value={{ id: 'currentwarehouse-1', label: 'Cold Store A' }} />)
  expect(screen.getByText('Cold Store A')).toHaveAttribute('data-record-id', 'currentwarehouse-1')
})
