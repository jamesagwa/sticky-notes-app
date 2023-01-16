import { INoteProps } from "../../../shared/interface";
import { NoteUI } from "../NoteUI";

export function NoteContainer(props: INoteProps) {
    return ( 
        <div style={{ display: 'inline-flex'}}>
            <NoteUI {...props} />
        </div>
    )
}