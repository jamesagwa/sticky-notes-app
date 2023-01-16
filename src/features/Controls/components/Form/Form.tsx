import { Button } from "../Button";
import { POSITIONS_LIST } from "../../../shared/constants";
import { INoteProps } from "../../../shared/interface";

type NameValue = {
    value: string;
}

interface IFormEvt {
    noteWidth: NameValue; noteHeight: NameValue; notePosition: NameValue;
}

export function Form({ handleCreate }: { handleCreate: (data:INoteProps) => void }) {
    return (
        <form onSubmit={(evt: React.SyntheticEvent) => {
            evt.preventDefault()
            const { noteWidth, noteHeight, notePosition } = evt.target as typeof evt.target & IFormEvt

            handleCreate({
                id: Date.now(),
                width: `${noteWidth.value}px`,
                height: `${noteHeight.value}px`,
                position: notePosition.value
            })
        }}>
            <div>
                <label htmlFor="noteWidth">Width</label>
                <input type="number" name="noteWidth" id="noteWidth" placeholder="Enter note width" />
            </div>
            <div>
                <label htmlFor="noteHeight">Height</label>
                <input type="number" name="noteHeight" id="noteHeight" placeholder="Enter note height" />
            </div>
            <div>
                <label htmlFor="notePosition">Position</label>
                <select name="notePosition" id="notePosition">
                    <option disabled selected>Select note position</option>
                    {
                        POSITIONS_LIST.map(({ position }, idx) => (
                            <option value={position} key={idx}>
                                {position}
                            </option>
                        ))
                    }
                </select>
            </div>
            <Button label="Create note" />
        </form>
    )
}