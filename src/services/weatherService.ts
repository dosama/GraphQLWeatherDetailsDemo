import request, { gql } from "graphql-request";
import { AppThunk } from "..";
import actions from "../actions/actions";
export default class WeatherService{

 public loadWeatherDataAsync= (country:string,unit:string): AppThunk => async dispatch => {
    try {
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

       const weatherDetails= await request('https://graphql-weather-api.herokuapp.com/', query);
   
      dispatch(actions.GET_WEATHER_DETAILS_SUCCESS(weatherDetails));

    } catch (err) {
      dispatch(actions.GET_WEATHER_DETAILS_FAILURE(err))    }
  }

}