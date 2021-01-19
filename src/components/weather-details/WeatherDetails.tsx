import React from 'react';
import './WeatherDetails.css';
import Spinner from '../spinner/Spinner';
import { useSelector } from "react-redux";

function WeatherDetails() {
    const weatherDetails = useSelector((state:any) => state.weatherDetails);
    const isLoading = useSelector((state:any) => state.isLoading);
    return (
        <div className="WeatherDetails">
            {isLoading ? (
                <Spinner></Spinner>
            ) : (
                    <div className="p-4">
                        <div className="row"> <h1>Weather Details</h1></div>
                        <div className="row">
                        Country: {weatherDetails?.country}
                            </div>
                            <div className="row mt-2"><h4>Temprature</h4></div>
                            <div className="row">
                            Actual: {weatherDetails?.weather.temperature.actual}
                            </div>
                            <div className="row"> 
                              FeelsLike: {weatherDetails?.weather.temperature.feelsLike}
                            </div>
                            <div className="row">
                              Min: {weatherDetails?.weather.temperature.min}
                            </div>
                            <div className="row">
                                 Max: {weatherDetails?.weather.temperature.max} 
                            </div>
                            <div  className="mt-2 row"><h4>Summary</h4></div>
                            <div  className="row"> Title:    {weatherDetails?.weather.summary.title} </div>
                            <div  className="row"> Description:    {weatherDetails?.weather.summary.description} </div>
                           
                        
                            <div className="mt-2 row"><h4>Wind</h4></div>
                            <div className="row"> Speed:   {weatherDetails?.weather.wind.speed} </div>
                            <div className="row"> Deg:  {weatherDetails?.weather.wind.deg} </div>
                          
                       
                            <div className="mt-2 row"><h4>Clouds</h4></div>
                            <div className="row"> All:   {weatherDetails?.weather.clouds.all} </div>
                            <div className="row"> Visibility:  {weatherDetails?.weather.clouds.visibility} </div>
                            <div className="row"> Humidity:  {weatherDetails?.weather.clouds.humidity} </div>
                    

                    </div>)}

        </div>
    );
}

export default WeatherDetails;
