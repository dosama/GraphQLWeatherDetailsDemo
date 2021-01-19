import React, { useEffect, useState } from 'react';
import './WeatherDetails.css';
import Spinner from '../spinner/Spinner';
import { useDispatch, useSelector } from "react-redux";

function WeatherDetails() {
    const [isLoading, setIsLoading] = useState(false); 
    const weatherDetails = useSelector((state:any) => state.weatherDetails);

    return (

        <div className="WeatherDetails">
            {isLoading ? (

                <Spinner></Spinner>

            ) : (
                    <div className="p-4">
                        <div className="row"> <h1>Weather Details</h1></div>
                        <div className="row">
                        Country: country
                            </div>
                            <div className="row mt-2"><h4>Temprature</h4></div>
                            <div className="row">
                            Actual: actual
                            </div>
                            <div className="row"> 
                              FeelsLike: feelsLike
                            </div>
                            <div className="row">
                              Min: min
                            </div>
                            <div className="row">
                                 Max:   max 
                            </div>
                            <div  className="row">Summary</div>
                            <div  className="row"> Title:   title </div>
                            <div  className="row"> Description:   description </div>
                           
                        
                            <div className="row">Wind</div>
                            <div className="row"> Speed:  speed </div>
                            <div className="row"> Deg:  deg </div>
                          
                       
                            <div className="row">Clouds</div>
                            <div className="row"> All:  all </div>
                            <div className="row"> Visibility:  visibility </div>
                            <div className="row"> Humidity:  humidity </div>
                    

                    </div>)}

        </div>
    );
}

export default WeatherDetails;
