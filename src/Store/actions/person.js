import * as actionTypes from './actionTypes';
import axios from '../../axios-families';

export const addPerson = (firstname, lastname, year) => {
    return {
        type: actionTypes.ADD_PERSON,
        firstname: firstname,
        lastname: lastname,
        year: year
    }
}

export const removePerson = () => {
    return {
        type: actionTypes.REMOVE_PERSON
    }
}

export const setPerson = () => {
    return {
        type: actionTypes.SET_PERSON
    }
}

export const fetchPeopleFail = () => {
    return {
        type: actionTypes.REMOVE_PERSON
    }
}

export const initPeople = (/* family name */) => {
    return dispatch => {
        axios.get('https://react-family-tree.firebaseio.com/families/' + /* family name */ + '.json')
            .then(res => {
                dispatch(setPerson(res.data))
            })
            .catch(err => {
                dispatch(fetchPeopleFail())
            })
    }
}