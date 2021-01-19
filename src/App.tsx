import React from 'react';
import './App.css';
import Header from './components/header/Header';
import WeatherDetails from './components/weather-details/WeatherDetails';

function App() {
  return (
    <div  className="App">
    <Header></Header>
    
<div className="container-fluid">
  <div className="row">
   <div className="col-md-12 col-lg-12">
   <main>
   <WeatherDetails></WeatherDetails>
       </main>
   </div>
  </div>
</div>

 </div>
  );
}

export default App;
