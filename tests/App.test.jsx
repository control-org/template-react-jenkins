import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from '../src/App.jsx'

describe('App', () => {
  it('renders the template heading', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { name: /react jenkins template/i }),
    ).toBeInTheDocument()
  })

  it('increments the counter when the button is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    expect(screen.getByText('Count: 0')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /increment/i }))

    expect(screen.getByText('Count: 1')).toBeInTheDocument()
  })
})
