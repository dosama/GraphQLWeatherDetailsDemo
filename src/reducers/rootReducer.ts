import { combineReducers, createReducer } from '@reduxjs/toolkit';
import actions from '../actions/actions';

const initialState:any = {
    weatherDetails: null,
    weatherDetailsError: null,
    isLoading:false
}
const weatherReducer  = createReducer(initialState, (builder) => {
    builder
      .addCase(actions.GET_WEATHER_DETAILS, state => {
        
      state.isLoading = true;     
      })
      .addCase(actions.GET_WEATHER_DETAILS_SUCCESS, (state, action) => {
        
        state.weatherDetails=action.payload?.getCityByName;
        state.isLoading= false; 
        })
        .addCase(actions.GET_WEATHER_DETAILS_FAILURE, (state, action) => {
           
            state.weatherDetailsError=action.payload;
            state.isLoading = false;     
            })
  })

const rootReducer = combineReducers({weatherReducer:weatherReducer})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;