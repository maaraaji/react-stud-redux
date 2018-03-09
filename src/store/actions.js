export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD_FIVE = 'ADD_FIVE';
export const SUB_FIVE = 'SUB_FIVE';
export const LOG_RESULT = 'LOG_RESULT';
export const DEL_LOG_RESULT = 'DEL_LOG_RESULT';

export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export const addFive = () => {
    return {
        type: ADD_FIVE,
        value: 5
    }
}

export const subFive = () => {
    return {
        type: SUB_FIVE,
        value: 5
    }
}

export const logResult = (value) => {
    return {
        type: LOG_RESULT,
        value: value
    }
}

export const delLogResult = (id) => {
    return {
        type: DEL_LOG_RESULT,
        id: id
    }
}