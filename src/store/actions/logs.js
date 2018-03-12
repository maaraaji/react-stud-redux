import * as actionTypes from '../actions';

const asyncLogResult = (resultValue) => {
    return {
        type: actionTypes.LOG_RESULT,
        value: resultValue
    }
}

export const logResult = (value) => {
    let time = 0
    console.log('[in logResult for ]' + time++ + ' time');
    return dispatch => {
        console.log(setTimeout(() => {
            dispatch(asyncLogResult(value))
        }, 2000))
    }
}

export const delLogResult = (id) => {
    return {
        type: actionTypes.DEL_LOG_RESULT,
        id: id
    }
}