import { button } from './Button.module.css'

interface IProps {
    label: string;
    onClick?: (evt: React.MouseEvent<HTMLElement>) => void;
}

export function Button({ label = '', onClick }: IProps) {
    return (
        <button onClick={onClick} className={button}>
            {label}
        </button>
    )
}