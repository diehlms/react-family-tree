import * as actionTypes from './actionTypes';

export const addFamily = name => {
    return {
        type: actionTypes.ADD_FAMILY,
        name
    }
}

export const removeFamily = id => {
    return {
        type: actionTypes.REMOVE_FAMILY,
        id
    }
}

export const addPerson = (firstname, lastname, famId) => {
    return {
        type: actionTypes.ADD_PERSON,
        firstname,
        lastname,
        famId
    }
}

export const removePerson = id => {
    return {
        type: actionTypes.REMOVE_PERSON,
        id
    }
}