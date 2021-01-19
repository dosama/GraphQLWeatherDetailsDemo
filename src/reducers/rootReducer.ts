import action from '../models/action'
const initialState = {
    weatherDetails: null,
    weatherDetailsError: null,
    isLoading:false
}

export default function rootReducer(state = initialState, action:action) {
 
    switch (action.type) {
        case 'GET_WEATHER_DETAILS_SUCCESS':
            return {
                ...state, weatherDetails: action.payload?.getCityByName,isLoading: false
            };
            case 'GET_WEATHER_DETAILS_FAILURE':
                return {
                    ...state, weatherDetailsError: action.payload,isLoading: false
                };
            case 'GET_WEATHER_DETAILS':
                return {
                    ...state, isLoading: true
                };
        default:
            return state;
    }
}