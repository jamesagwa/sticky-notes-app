export interface INoteProps {
    id: number;
    position?: string;
    width?: string;
    height?: string;
    onMouseUp?: () => void
}

export interface ITrashProps {
    onTrashZone: (e: boolean) => void
}