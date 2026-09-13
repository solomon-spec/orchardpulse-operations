import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('OrchardPulse shell', () => {
  it('renders the operational summary', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Harvest operations' })).toBeInTheDocument()
    expect(screen.getByText('184')).toBeInTheDocument()
    expect(screen.getByText('Bins cooling')).toBeInTheDocument()
  })
})
