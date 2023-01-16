import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, vi } from 'vitest'

import { TrashUI } from './TrashUI'

afterEach(() => {
    vi.restoreAllMocks()
    cleanup()
})

beforeEach(() => {
    global.IntersectionObserver = vi.fn().mockImplementation(() => ({
        observe: vi.fn(),
        unobserve: vi.fn(),
        disconnect: vi.fn()
    }))
})

describe('TrashUI', () => { 
   it('should render UI', () => { 
        render(<TrashUI onTrashZone={() => vi.fn()} />)
        expect(screen.getByTestId('trash-ui')).toBeInTheDocument()
    }) 
 })