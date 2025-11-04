// src/test/__tests__/routes.test.jsx
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Home from '../../pages/Home'

const mockNavigate = vi.fn()
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  }
})

describe('App Routes', () => {
  it('should render home page with logo', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    

    expect(screen.getByAltText('Logo do Estacionamento')).toBeInTheDocument()
  })
})