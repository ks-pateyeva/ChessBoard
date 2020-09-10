const COUNT_WHITE_SQUARES = 'COUNT_WHITE_SQUARES';
const countWhiteSquares =  (payload) => ({ type: COUNT_WHITE_SQUARES, payload });

export const actions = {
    countWhiteSquares,
};

export const types = {
    COUNT_WHITE_SQUARES,
}