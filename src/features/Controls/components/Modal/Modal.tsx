import { useEffect } from "react"

import { hidden, contentWrapper, closeIcon, overlay, overlayWrapper } from './Modal.module.css'

interface IProps {
    children: JSX.Element | string;
    open: boolean;
    onClose: () => void
}

export function Modal({ children, open = false, onClose }: IProps) {
    const handleEscPress = (evt: KeyboardEvent) => {
        if (evt.key === 'Escape') {
            onClose()
        }
    }

    useEffect(() => {
        const dom = window.document
        dom.addEventListener('keydown', handleEscPress)

        return () => {
            dom.removeEventListener('keydown', handleEscPress)
        }
    }, [])

    return (
        <div data-testid="modal" className={!open ? hidden : ''}>
            <div className={contentWrapper}>
                <div
                    onClick={onClose}
                    className={closeIcon}
                >
                    X
                </div>
                {children}
            </div>
            <div
                className={overlayWrapper}
                onClick={() => onClose()}
            >
                <div className={overlay} />
            </div>
        </div>
    )
}