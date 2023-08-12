import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';
import Loader from './Loader';
import OurService from './OurService';

function PatientHome() {
  return (
    <>
<Loader></Loader>
<OurService text={"User"}></OurService>



<div className='d-lg-flex align-items-lg-center'>


    <div className="form-bg">
        <div className="form-container ">
		<span class="badge badge-success">Verified</span>
            <img
            src={process.env.PUBLIC_URL + "/patient.jpg"}
            height="180px"
            className="card-img-top shadow rounded mb-2"
            alt="..."
            />
            <form className="form-horizontal">
                <Link to="/addpatient" className="btn btn-default">
                Add Patient
                </Link>

            </form>
            </div>
      </div>

   
    <div className="form-bg">
        <div className="form-container ">
            <img
            src={process.env.PUBLIC_URL + "/patient.jpg"}
            height="180px"
            className="card-img-top shadow rounded mb-2"
            alt="..."
            />
           
                <form className="form-horizontal">
                <Link to="/viewpatient" className="btn btn-default">
                        View Patient Details
                </Link>
                </form> 
        </div>
      </div>



    </div>





    </>
  )
}

export default PatientHome