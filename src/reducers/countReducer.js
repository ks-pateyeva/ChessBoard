import { types } from '../actions';

export const whiteSquareCount = (state = 32, action) => {
    switch (action.type) {
        case types.COUNT_WHITE_SQUARES:
            return state + action.payload;
        default:
            return state;
    }
};