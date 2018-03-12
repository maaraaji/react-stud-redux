import * as actionTypes from '../actions';

export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    }
}

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    }
}

export const addFive = () => {
    return {
        type: actionTypes.ADD_FIVE,
        value: 5
    }
}

export const subFive = () => {
    return {
        type: actionTypes.SUB_FIVE,
        value: 5
    }
}