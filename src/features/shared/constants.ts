type PositionKeys = 'Top left' | 'Top' | 'Top right' | 'Right' | 'Bottom right' | 'Bottom' | 'Bottom left' | 'Left' | 'Center';

type Positions = {
    readonly [key in (PositionKeys) | string]: Record<string, string>;
};

export const NOTE_POSITIONS:Positions = {
    'Top left': {
        top: '0',
        left: '0',
    },
    'Top': {
        top: '0',
        left: '50%',
    },
    'Top right': {
        top: '0',
        right: '0',
    },
    'Right': {
        top: '50%',
        right: '0',
    },
    'Bottom right':  {
        bottom: '0',
        right: '0',
    },
    'Bottom': {
        bottom: '0',
        left: '50%',
    },
    'Bottom left': {
        bottom: '0',
        left: '0',
    },
    'Left': {
        top: '50%',
        left: '0',
    },
    'Center': {
        top: '50%',
        left: '50%',
    }
}

export const POSITIONS_LIST = Object.keys(NOTE_POSITIONS).map(position => ({
    position,
    value: NOTE_POSITIONS[position]
}))
