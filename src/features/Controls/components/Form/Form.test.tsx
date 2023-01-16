import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, vi } from 'vitest'

import { Form } from './Form'

afterEach(() => {
    vi.restoreAllMocks()
    cleanup()
})

describe('Form', () => { 
    beforeEach(() => {
        render(<Form handleCreate={() => vi.fn()} />)
    })

    it('should display input text when typed in', async () => { 
        const inputWidth = screen.getByPlaceholderText('Enter note width')
        const inputHeight = screen.getByPlaceholderText('Enter note height')
        const value = '200'

        await userEvent.type(inputWidth, value) 
        await userEvent.type(inputHeight, value)

        expect(inputWidth).toHaveValue(Number(value))
        expect(inputHeight).toHaveValue(Number(value))
     })

    it.skip('should call the handleCreate handler when form is submitted', async () => { 
        const inputWidth = screen.getByPlaceholderText('Enter note width')
        const inputHeight = screen.getByPlaceholderText('Enter note height')
        const createNoteButton = screen.getByText('Create note')
        const expectedCallData = {
            width: '200',
            height: '200'
        }

        await userEvent.type(inputWidth, '200')
        await userEvent.type(inputHeight, '200')
        userEvent.click(createNoteButton)
     }) 
 })