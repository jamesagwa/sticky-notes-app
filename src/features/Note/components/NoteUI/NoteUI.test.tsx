import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { afterEach, beforeEach, vi } from 'vitest'

import { NoteUI } from './NoteUI'

afterEach(() => {
    vi.restoreAllMocks()
    cleanup()
})

beforeEach(() => {
    global.ResizeObserver = vi.fn().mockImplementation(() => ({
        observe: vi.fn(),
        unobserve: vi.fn(),
        disconnect: vi.fn()
    }))
})

describe('NoteUI', () => { 
    const mouseUpMock = vi.fn()
    const props = {
        id: 123,
        width: '100px',
        height: '100px',
        position: 'Center',
        onMouseUp: mouseUpMock
    }

    beforeEach(() => {
        render(<NoteUI {...props}/>) 
    })
    
    it('should render Note based on passed props', () => {
        const noteTestId = `${props.id}`
        expect(screen.getByTestId(noteTestId)).toBeInTheDocument()
     })

     it('should observe resizing when rendered', () => { 
        expect(global.ResizeObserver).toHaveBeenCalled()
        expect(global.ResizeObserver).toHaveBeenCalledTimes(1)
      })

     it.skip('should call mouseDown handler when moused down', () => {
        const setStateMock = vi.fn()
        const useStateMock: any = (useState: any) => [useState, setStateMock]
        vi.spyOn(React, 'useState').mockImplementation(useStateMock)

        const noteTestId = `${props.id}`
        const note = screen.getByTestId(noteTestId)

        fireEvent.mouseDown(note)
        expect(setStateMock).toHaveBeenCalledWith('true')
      })
     
      it('should call mouseMove handler when clicked and dragged', () => {
        const noteTestId = `${props.id}`
        const note = screen.getByTestId(noteTestId)
        const initNoteLocationY = note.style.top

        fireEvent.mouseDown(note)
        fireEvent.mouseMove(note, { clientX: 100, clientY: 200 })

        expect(initNoteLocationY).not.toEqual(note.style.top)
        expect(note.style.top).toEqual('200px')
      })

      it('should call mouseUp handler when moused up', () => { 
        const noteTestId = `${props.id}`
        const note = screen.getByTestId(noteTestId)

        fireEvent.mouseDown(note)
        fireEvent.mouseUp(note)

        expect(props.onMouseUp).toHaveBeenCalled()
        expect(props.onMouseUp).toHaveBeenCalledTimes(1)
       })
 })