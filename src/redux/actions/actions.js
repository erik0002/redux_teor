import {ADD, SUB, ADD_NUMBER, ADD2} from './actionTypes'

export function add() {
    return {
        type: ADD
    }
}

export function add2(number) {
    return {
        type: ADD2,
        payload: number
    }
}

export function sub() {
    return {
        type: SUB
    }
}

export function asyncAdd(number) {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(addNumber(100))
        }, 3000)
    }
}

export function addNumber(number) {
    return {
        type: ADD_NUMBER,
        payload: number
    }
}
