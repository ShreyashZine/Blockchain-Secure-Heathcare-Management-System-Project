import './App.css';
import React from 'react';
import { useState } from 'react';
import AddPatientComponent from './components/AddPatientComponent';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Navbarcomponent from './components/Navbarcomponent';
import FooterComponent from './components/FooterComponent';
import ViewPatientComponent from './components/ViewPatientComponent';
import UserTypeComponent from './components/UserTypeComponent';
import PatientHome from './components/PatientHome';
import ForceLogin from './components/ForceLogin';
import Loader from './components/Loader';

 
function App() {

  const [currentAccount, setCurrentAccount] = useState(null);

  const [currentBalance, setCurrentBalanace] = useState(null);

  const [DocStatus, setDocStatus] = useState(true);
  const [MedStatus, setMedStatus] = useState(true);

  return <>

    <div className="App">
        
        <Loader></Loader>

          {currentAccount?
            <Router>
            <Navbarcomponent setCurrentAccount={setCurrentAccount} setCurrentBalanace={setCurrentBalanace} currentAccount={currentAccount} currentBalance={currentBalance}></Navbarcomponent>
            
            <div className='container-fluid mt-4'>
           
              <Routes> 
               
                <Route exact path='/' element={<UserTypeComponent></UserTypeComponent>}></Route>
                <Route exact path='/patienthome' element={<PatientHome></PatientHome>}></Route>
                <Route exact path='/addpatient' element={<AddPatientComponent currentAccount={currentAccount} currentBalance={currentBalance} setCurrentBalanace={setCurrentBalanace}></AddPatientComponent>}></Route>
                <Route exact path='/viewpatient' element={<ViewPatientComponent></ViewPatientComponent>}></Route>
             
         
              </Routes>
            </div>
          
              
              <FooterComponent></FooterComponent>
    
          </Router>
           
          :
          <Router>
              <Navbarcomponent setCurrentAccount={setCurrentAccount} setCurrentBalanace={setCurrentBalanace} currentAccount={currentAccount} currentBalance={currentBalance}></Navbarcomponent>
              <>
                <Routes> 
                  <Route exact path='/' element={<ForceLogin></ForceLogin>}></Route>
                  <Route exact path='*' element={<ForceLogin></ForceLogin>}></Route>
                </Routes>
              </>
                <FooterComponent></FooterComponent>
              </Router>
            
        }
        </div>
         
  
  </>;
}

export default App;






