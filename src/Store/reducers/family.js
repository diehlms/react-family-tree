import * as actionTypes from '../actions/actionTypes';

const initialState = {
    name: null,
    people: 0
}

const addFamily = (state, action) => {

}

const removeFamily = (state, action) => {

}

const fetchFamilies = (state, action) => {

}

const fetchFamiliesFail = (state, action) => {

}


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_FAMILY: return addFamily(state, action);
        case actionTypes.REMOVE_FAMILY: return removeFamily(state, action);
        case actionTypes.FETCH_FAMILIES: return fetchFamilies(state, action);
        case actionTypes.FETCH_FAMILIES_FAIL: return fetchFamiliesFail(state, action);
        default:
            return state
    }
}
export default reducer;