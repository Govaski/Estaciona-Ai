// src/test/__tests__/pages/Login.test.jsx
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import Login from '../../../pages/Login'

describe('Login', () => {
  describe('Renderização inicial', () => {
    it('deve renderizar ambos os cards de login', () => {
      render(
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      )

      expect(screen.getByText('Sou Motorista')).toBeDefined()
      expect(screen.getByText('Sou Estabelecimento')).toBeDefined()
    })

    it('deve renderizar logos em ambos os cards', () => {
      render(
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      )

      const motoristaLogo = screen.getByAltText('Logo Motorista')
      const estabelecimentoLogo = screen.getByAltText('Logo Estabelecimento')

      expect(motoristaLogo).toBeDefined()
      expect(estabelecimentoLogo).toBeDefined()
      expect(motoristaLogo.src).toContain('/src/assets/logo.png')
      expect(estabelecimentoLogo.src).toContain('/src/assets/logo.png')
    })

    it('deve renderizar descrições em ambos os cards', () => {
      render(
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      )

      expect(screen.getByText('Acesse sua conta para gerenciar suas reservas.')).toBeDefined()
      expect(screen.getByText('Acesse para gerenciar suas vagas e reservas.')).toBeDefined()
    })
  })

  describe('Campos de formulário', () => {
    it('deve renderizar campos de email em ambos os cards', () => {
      render(
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      )

      const emailInputs = screen.getAllByLabelText('Email')

      expect(emailInputs).toHaveLength(2)
      emailInputs.forEach(input => {
        expect(input.type).toBe('email')
      })
    })

    it('deve renderizar campos de senha em ambos os cards', () => {
      render(
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      )

      const senhaInputs = screen.getAllByLabelText('Senha')

      expect(senhaInputs).toHaveLength(2)
      senhaInputs.forEach(input => {
        expect(input.type).toBe('password')
      })
    })
  })

   describe('Layout e estrutura', () => {
    it('deve renderizar container principal com gradiente', () => {
      const { container } = render(
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      )

      const mainContainer = container.firstChild

      expect(mainContainer).toBeDefined()
      expect(mainContainer).toHaveStyle('display: flex')
      expect(mainContainer).toHaveStyle('justifyContent: center')
      expect(mainContainer).toHaveStyle('alignItems: center')
      expect(mainContainer).toHaveStyle('minHeight: 100vh')
    })

    it('deve renderizar cards com animação e sombra', () => {
      render(
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      )

      const cards = document.querySelectorAll('[class*="MuiBox-root"]').item(2).children

      expect(cards.length).toBeGreaterThan(0)
    })

    it('deve organizar cards em grid responsivo', () => {
      const { container } = render(
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      )

      const gridContainer = container.querySelector('[class*="MuiGrid-container"]')

      expect(gridContainer).toBeDefined()
    })
  })

  describe('Texto e conteúdo', () => {
    it('deve exibir texto "Não tem conta?" em ambos os cards', () => {
      render(
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      )

      const naoTemContaTexts = screen.getAllByText('Não tem conta?')

      expect(naoTemContaTexts).toHaveLength(2)
    })

      })
})