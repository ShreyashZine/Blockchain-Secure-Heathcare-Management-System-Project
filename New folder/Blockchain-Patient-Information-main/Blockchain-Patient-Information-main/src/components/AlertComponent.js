import {React,useState} from 'react'
import Loader from './Loader'

function AlertComponent() {

  return (
   
      <div className='text-center container'>
       <Loader></Loader>

       

    <div className='alert alert-success alert-dismissible fade'  id='alertid'  role="alert">
            <strong>Success!</strong>
    </div>
    

    

    <div className='alert alert-danger alert-dismissible fade' id='alertidf' role="alert">
        <strong>Failed!</strong>
    </div>
  

</div>

  )
}

export default AlertComponent