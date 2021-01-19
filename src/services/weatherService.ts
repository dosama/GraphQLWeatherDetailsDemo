import request, { gql } from "graphql-request";
import actions from "../actions/actions";

import { Dispatch } from "react";
export default class WeatherService{
 
    
    public loadWeatherDataAsync= (dispatch:Dispatch<any>,country:string,unit:string)=>{

       // Initial action dispatched
       dispatch(actions.GET_WEATHER_DETAILS());
       const query = gql`
       {
         getCityByName(name:"${country}", config:{units:${unit}}) {
         country
         weather {
         temperature {
         actual
         feelsLike
         min
         max
         }
         summary {
         title
         description
           }
         wind {
         speed
         deg
         }
         clouds {
         all
         visibility
         humidity
         }
         }
         }
         }`
  
         request('https://graphql-weather-api.herokuapp.com/', query).then((data) => {
    
           dispatch(actions.GET_WEATHER_DETAILS_SUCCESS(data))
         }).catch((err)=>dispatch(actions.GET_WEATHER_DETAILS_FAILURE(err)));

         }

}