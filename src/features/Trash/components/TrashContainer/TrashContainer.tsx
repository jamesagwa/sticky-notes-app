import { ITrashProps } from "../../../shared/interface";
import { TrashUI } from "../TrashUI";

export function TrashContainer(props: ITrashProps) {
    return (
        <div>
            <TrashUI {...props} />
        </div>
    )
}