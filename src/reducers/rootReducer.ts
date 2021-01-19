import _ from 'lodash';
import action from '../models/action'
const initialState = {
    weatherDetais: null
}

export default function rootReducer(state = initialState, action:action) {
    let newState = {...state};

    switch (action.type) {
        case 'SET_WEATHER_DETAILS':
            return {
                ...state, weatherDetais: action.payload
            };
        default:
            return state;
    }
}