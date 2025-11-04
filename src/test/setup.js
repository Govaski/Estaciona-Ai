import '@testing-library/jest-dom'
import { cleanup } from '@testing-library/react'
import { afterAll, afterEach, beforeAll, vi } from 'vitest'


const originalError = console.error
const originalWarn = console.warn

beforeAll(() => {

    window.alert = vi.fn()

    console.error = (...args) => {
        if (
            /Warning: ReactDOM.render is deprecated/.test(args[0]) ||
            /MUI Grid: The `item` prop has been removed/.test(args[0]) ||
            /MUI Grid: The `xs` prop has been removed/.test(args[0]) ||
            /MUI Grid: The `md` prop has been removed/.test(args[0])
        ) {
            return
        }
        originalError.call(console, ...args)
    }

    console.warn = (...args) => {
        if (
            /MUI Grid: The `item` prop has been removed/.test(args[0]) ||
            /MUI Grid: The `xs` prop has been removed/.test(args[0]) ||
            /MUI Grid: The `md` prop has been removed/.test(args[0])
        ) {
            return
        }
        originalWarn.call(console, ...args)
    }
})

afterAll(() => {
    console.error = originalError
    console.warn = originalWarn
    vi.clearAllMocks()
})

afterEach(() => {
    cleanup()
    vi.clearAllMocks()
})