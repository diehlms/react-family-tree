import * as actionTypes from '../actions/actionTypes';
import uuid from 'uuid'

const initialState = {
    families: [
        {
            id: 1,
            name: 'Smiths',
            people: [
                {
                    id: 1,
                    firstname: 'Bob',
                    lastname: 'Smith'
                }
            ]
        }
    ]
}


export default function(state = initialState, action) {
    switch(action.type) {
        case actionTypes.ADD_FAMILY: {
            const newFamily = {
                id: uuid.v4(),
                name: action.name,
                people: []
            }
            return {
                families: [...state.families, newFamily]
            }
        }
        case actionTypes.REMOVE_FAMILY: return {...state}
        case actionTypes.ADD_PERSON: {
            const newPerson = {
                id: uuid.v4(),
                firstname: action.firstname,
                lastname: action.lastname
            }
            const family = state.families.find((indFam) => {
                return indFam.id == action.famId
            })
            family.people.push(newPerson)
        }
        case actionTypes.REMOVE_PERSON: return {...state}
        default: 
            return state
    }
};