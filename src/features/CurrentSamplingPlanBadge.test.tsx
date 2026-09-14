import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { CurrentSamplingPlanBadge } from './CurrentSamplingPlanBadge'

it('shows the initial sampling plan', () => {
  render(<CurrentSamplingPlanBadge value={{ id: 'currentsamplingplan-1', label: 'Plan Delta' }} />)
  expect(screen.getByText('Plan Delta')).toHaveAttribute('data-record-id', 'currentsamplingplan-1')
})
