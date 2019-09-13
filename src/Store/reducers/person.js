import * as actionTypes from '../actions/actionTypes';

const initialState = {
    firstName: null,
    lastName: null,
    yearBorn: 0,
}

const addPerson = (state, action) => {

}

const removePerson = (state, action) => {

}

const setPerson = (state, action) => {

}

const fetchPeople = (state, action) => {

}

const fetchPeopleFail = (state, action) => {

}


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_PERSON: return addPerson(state, action);
        case actionTypes.REMOVE_PERSON: return removePerson(state, action);
        case actionTypes.SET_PERSON: return setPerson(state, action);
        case actionTypes.FETCH_PEOPLE: return fetchPeople(state, action);
        case actionTypes.FETCH_PEOPLE_FAIL: return fetchPeopleFail(state, action);
        default:
             return state
    }
}
export default reducer;