import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [selectedUnit, setSelctedUnit] = useState('metric'); 
  const handleUnitChange=(event:any)=>{
setSelctedUnit(event.target.value);
  }
  return (
  <div  className="Header">
   <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
  <div className="navbar-brand col-md-2 col-lg-2 mr-0 px-3">Weather Search</div>
  <div className="form col-md-10 col-lg-10 mt-4">
    <div className="form-group row col-md-12">
      <div className=" col-md-5 col-lg-5">
        <div className="row">
        <div className="col-md-3 col-lg-3 navbar-brand">Country:</div>
      <input type="text" className="col-md-6 col-lg-6 form-control"></input>
        </div>
       
      </div>
      <div className=" col-md-5 col-lg-5">
        <div className="row">
        <div className="col-md-3 col-lg-3 navbar-brand">Unit:</div>
      <select className="col-md-6 col-lg-6 form-control p-2"
        value={selectedUnit} 
        onChange={handleUnitChange} 
      >
       <option value="metric">Metric</option>
        <option value="imperial">Imperial</option>
        <option value="kelvin">Kelvin</option>
      </select>
        </div>
     
      </div>
      <div className="col-md-2 col-lg-2">
      <button className="btn btn-primary">Search</button>
      </div>
    </div>
  

  </div>

</header>

 </div>

 );
}

export default Header;
