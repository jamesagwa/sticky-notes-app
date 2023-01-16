import { useState } from "react";
import { INoteProps } from "../../../shared/interface";
import { Button } from "../Button";
import { Form } from "../Form";
import { Modal } from "../Modal";

export function ControlsContainer({ _createNote }: { _createNote: (data: INoteProps) => void }) {
    const [openModal, setOpenModal] = useState(false)

    return (
        <div>
            <Button onClick={() => setOpenModal(true)} label="New note" />
            <Modal onClose={() => setOpenModal(false)} open={openModal}>
                <Form handleCreate={(data) => {
                    _createNote(data)
                    setOpenModal(false)
                }} />
            </Modal>
        </div>
    )
}