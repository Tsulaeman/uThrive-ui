import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders products from the mock service', async () => {
    render(<App />)

    expect(screen.getByText('Loading products...')).toBeInTheDocument()
    expect(await screen.findByText('Ergonomic Office Chair')).toBeInTheDocument()
    expect(screen.getByText('$199.99')).toBeInTheDocument()
  })
})
