import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';
import Loader from './Loader';
import OurService from './OurService';

function UserTypeComponent() {
  return (
    <>
    <Loader></Loader>
    <OurService to={" To"} text={"Secure Blockchain Network"}></OurService>
  
 <div className='d-lg-flex align-items-lg-center'>
      
    
      
    <div className="form-bg">
        <div className="form-container ">
            <img
            src={process.env.PUBLIC_URL + "/patient.jpg"}
            height="180px"
            className="card-img-top shadow rounded mb-2"
            alt="..."
            />
           
                <form className="form-horizontal">
                <Link to="/patienthome" className="btn btn-default">
                        Patient Information Dashboard 
                </Link>
                </form> 
        </div>
      </div>

    </div>

    </>
  );
}

export default UserTypeComponent