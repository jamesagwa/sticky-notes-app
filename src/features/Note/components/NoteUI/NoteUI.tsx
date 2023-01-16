import { useEffect, useRef, useState } from 'react'
import { NOTE_POSITIONS } from '../../../shared/constants'
import { INoteProps } from '../../../shared/interface'
import styles from './NoteUI.module.css'

const { container } = styles

export function NoteUI ({ position = "Center", width = '200px', height = '200px', id, onMouseUp }: INoteProps) {
    const [isDraggable, setIsDraggable] = useState(false)
    const [locationX, setLocationX] = useState(0)
    const [locationY, setLocationY] = useState(0)
    const [isEditable, setIsEditable] = useState(false)
    const noteRef = useRef<HTMLDivElement>(null)

    function handleMouseDown(evt: React.MouseEvent) {
        setIsDraggable(true)
        const zIndex = noteRef.current!.style.zIndex
        noteRef.current!.style.zIndex = `${Number(zIndex) + 1}`

        const dimension = noteRef.current?.getBoundingClientRect()
        setLocationX(evt.clientX - dimension?.x!)
        setLocationY(evt.clientY - dimension?.y!)
    }

    function handleMouseMove(evt:React.MouseEvent) {
        if (isDraggable) {
            noteRef.current!.style.left = `${evt.clientX - locationX}px`
            noteRef.current!.style.top = `${evt.clientY - locationY}px`
        }
    }

    function handleMouseUp() {
        setIsDraggable(false)
        onMouseUp!()
    }

    useEffect(() => {
      const observer = new ResizeObserver(function(entries) {
        setIsDraggable(false)
      })

      if (noteRef.current) {
          observer.observe(noteRef.current)
      }
    
      return () => {
        if (noteRef.current) {
            observer.unobserve(noteRef.current!)
        } else {
            observer.disconnect()
        }
      }
    }, [])
    


    return (
        <div
            contentEditable={isEditable}
            data-testid={`${id}`}
            ref={noteRef}
            className={container}
            style={{ width, height, ...NOTE_POSITIONS[position] }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onDoubleClick={() => setIsEditable(true)}
            onBlur={() => setIsEditable(false)}
        ></div>
    )
}