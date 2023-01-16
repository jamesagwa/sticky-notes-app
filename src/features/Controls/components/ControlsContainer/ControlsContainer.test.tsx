import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, vi } from 'vitest'

import { ControlsContainer } from './ControlsContainer'

afterEach(() => {
    vi.restoreAllMocks()
    cleanup()
})

describe('ControlsContainer', () => { 
    const props = {
        _createNote: vi.fn()
    }
    beforeEach(() => {
        render(<ControlsContainer {...props} />)
    })

    it('should display button component when rendered', () => { 
        expect(screen.getByText('New note')).toBeInTheDocument()
    })
    
    it('should display modal component when new note button is clicked', () => {
        const button = screen.getByText('New note')
        userEvent.click(button)
        expect(screen.getByTestId('modal')).toBeInTheDocument()
    })

    it('should display form component when new note button is clicked', () => { 
        const button = screen.getByText('New note')
        userEvent.click(button)
        expect(screen.getByLabelText('Width')).toBeInTheDocument()
     })
    
    it.skip('should call the createNote handler when form is submitted', async () => { 
        const button = screen.getByText('New note')
        userEvent.click(button)
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

        expect(props._createNote).toHaveBeenCalled()
        expect(props._createNote).toHaveBeenCalledTimes(1)
        expect(props._createNote).toHaveBeenCalledWith(expectedCallData)
     })
 })