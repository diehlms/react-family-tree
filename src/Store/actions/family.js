import * as actionTypes from './actionTypes';
import axios from '../../axios-families';

export const addFamily = (family) => {
    return {
        type: actionTypes.ADD_FAMILY,
        name: family
    }
}

export const removeFamily = (family) => {
    return {
        type: actionTypes.REMOVE_FAMILY,
        name: family
    }
}

export const setFamily = (families) => {
    return {
        type: actionTypes.SET_FAMILY,
        families: families
    }
}

export const fetchFamiliesFail = () => {
    return {
        type: actionTypes.FETCH_FAMILIES_FAIL
    }
}

export const initFamilies = () => {
    return dispatch => {
        axios.get('https://react-family-tree.firebaseio.com/families.json')
            .then(res => {
                dispatch(setFamily(res.data))
            })
            .catch(err => {
                dispatch(fetchFamiliesFail())
            })
    }
}