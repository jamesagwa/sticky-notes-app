import { useState } from 'react'
import { Controls } from '../features/Controls'
import { Note } from '../features/Note'
import { INoteProps } from '../features/shared/interface'
import { Trash } from '../features/Trash'
import { container, controlTrashBar } from './index.module.css'

export default function AppShell() {
    const [notes, setNotes] = useState<INoteProps[]>([])
    const [isTrashZone, setIsTrashZone] = useState(false)

    function createNote(note:INoteProps) {
        setNotes((prev) => [...prev, note])
    }

    function removeNote(id:number) {
        const filteredNotes = notes.filter(note => note.id === id)
        setNotes(filteredNotes)
    }

    return (
        <main className={container}>
            <div className={controlTrashBar}>
                <Controls _createNote={createNote} />
                <Trash onTrashZone={(trashZone) => setIsTrashZone(trashZone)} />
            </div>
            {
                notes.map(({onMouseUp, ...note}) => (
                    <Note {...note} key={note.id} onMouseUp={() => {
                        if (isTrashZone) {
                            removeNote(note.id)
                        }
                    }}/>
                ))
            }
        </main>
    )
}