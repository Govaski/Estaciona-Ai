import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import Cadastro from '../../../pages/Cadastro'

// Mock para navegação
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useNavigate: () => vi.fn(),
  }
})

describe('Cadastro', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    window.alert = vi.fn()
  })

  describe('Renderização inicial', () => {
    it('deve renderizar o título e botão de cadastro', () => {
      render(
        <BrowserRouter>
          <Cadastro />
        </BrowserRouter>
      )

      expect(screen.getByText('Crie sua conta')).toBeDefined()
      expect(screen.getByRole('button', { name: 'Cadastrar' })).toBeDefined()
    })

    it('deve iniciar com motorista selecionado por padrão', () => {
      render(
        <BrowserRouter>
          <Cadastro />
        </BrowserRouter>
      )

      const motoristaText = screen.getByText('Sou Motorista')
      const estabelecimentoText = screen.getByText('Sou Estabelecimento')
      const motoristaCheckbox = motoristaText.closest('label').querySelector('input[type="checkbox"]')
      const estabelecimentoCheckbox = estabelecimentoText.closest('label').querySelector('input[type="checkbox"]')

      expect(motoristaCheckbox.checked).toBe(true)
      expect(estabelecimentoCheckbox.checked).toBe(false)
    })
  })

  describe('Navegação', () => {
    it('deve conter link para página de login', () => {
      render(
        <BrowserRouter>
          <Cadastro />
        </BrowserRouter>
      )

      const loginLink = screen.getByRole('link', { name: /faça login/i })

      expect(loginLink).toBeDefined()
      expect(loginLink.getAttribute('href')).toBe('/login')
    })
  })

  describe('Validação de estado', () => {
    it('deve manter estado consistente entre alternâncias de tipo de usuário', () => {
      render(
        <BrowserRouter>
          <Cadastro />
        </BrowserRouter>
      )

      const motoristaText = screen.getByText('Sou Motorista')
      const estabelecimentoText = screen.getByText('Sou Estabelecimento')
      const motoristaCheckbox = motoristaText.closest('label').querySelector('input[type="checkbox"]')
      const estabelecimentoCheckbox = estabelecimentoText.closest('label').querySelector('input[type="checkbox"]')

      expect(motoristaCheckbox.checked).toBe(true)
      expect(estabelecimentoCheckbox.checked).toBe(false)

      fireEvent.click(estabelecimentoText)
      fireEvent.click(motoristaText)
      fireEvent.click(estabelecimentoText)

      expect(motoristaCheckbox.checked).toBe(false)
      expect(estabelecimentoCheckbox.checked).toBe(true)
    })
  })
})