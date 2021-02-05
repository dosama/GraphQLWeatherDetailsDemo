import { createAction } from "@reduxjs/toolkit";

const actions = {

     GET_WEATHER_DETAILS:createAction('GET_WEATHER_DETAILS'),
     GET_WEATHER_DETAILS_SUCCESS:createAction<any>('GET_WEATHER_DETAILS_SUCCESS'),
     GET_WEATHER_DETAILS_FAILURE:createAction<any>('GET_WEATHER_DETAILS_FAILURE')
};

export default actions;
