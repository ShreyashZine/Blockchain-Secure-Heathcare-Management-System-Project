import React from 'react'
import { useEffect } from 'react';
import { ethers } from 'ethers';
import { useState } from 'react';
import Loader from './Loader';


const PatientContractAddress="0xCaEe5f85bE94B4858D756717a82F44985B1A61De";
const abiPatientContract=[
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "patientid",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "FullName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Gender",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Address",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "DateOfBirth",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "PhoneNumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Diagnoses",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Medicines",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Health_Survey_Lab_Test",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "AnyPastHistroy",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "Doctorid",
				"type": "address"
			}
		],
		"name": "addPatient",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "patientid",
				"type": "uint256"
			}
		],
		"name": "getAllPatient",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "patientid",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "FullName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Gender",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Address",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "DateOfBirth",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "PhoneNumber",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Diagnoses",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Medicines",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Health_Survey_Lab_Test",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "AnyPastHistroy",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "Doctorid",
						"type": "address"
					}
				],
				"internalType": "struct PatientContract.PatientData[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "patientid",
				"type": "uint256"
			}
		],
		"name": "getNumberOfRecords",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "patientid",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getPatient",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];


function AddPatientComponent(props) {

  const [account, setAccount] = useState(null);

  const setacc=async()=>{

    const { ethereum } = window;
    const accounts = await ethereum.request({ method: 'eth_accounts' });
    setAccount(accounts[0]);
    //console.log(account)
    //account = accounts[0];
 
  }


  
    const clear=()=>{
        document.getElementById("myForm").reset();
    }

    const savedata = async () => {
        try {
          const { ethereum } = window;
    
          if (ethereum) {
  
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();

            const PatientContract= new ethers.Contract(PatientContractAddress, abiPatientContract, signer);
  
  
            //datacapture
            const Patientid=document.getElementById("pid").value;
          
            const FirstName=document.getElementById("fname").value;
            const MiddleName=document.getElementById("mname").value;
            const LastName=document.getElementById("lname").value;

            const Gender=document.getElementById("gender").value;

            const Address1=document.getElementById("address1").value;
            const Address2=document.getElementById("address2").value;
            const City=document.getElementById("city").value;
            const State=document.getElementById("state").value;
            const Zipcode=document.getElementById("zipcode").value;

            const dateofbirth=document.getElementById("dateofbirth").value;

            const phonenumber=document.getElementById("phonenumber").value;

            const Diagnoses=document.getElementById("diagnoses").value;

            const Medicines=document.getElementById("medicines").value;

            const HealthSurvey=document.getElementById("healthsurvey").value;
            const LabTest=document.getElementById("labtest").value;

            const PastHistroy=document.getElementById("pasthistroy").value;

            const doctorHospital=document.getElementById("doctorHospital").value;
  
            //start          
            console.log("Initialize");
            const Fullname=FirstName+" "+MiddleName+" "+LastName;
            const FullAddress=Address1+" "+Address2+" "+City+" "+State+" "+Zipcode; 
            const HealthSurveyLabtest=HealthSurvey+" "+LabTest;
            //console.log(Fullname)
            //console.log(idu)
            let Txn2 = await PatientContract.addPatient(Patientid,Fullname,Gender,FullAddress,dateofbirth,phonenumber,Diagnoses,Medicines,HealthSurveyLabtest,PastHistroy,doctorHospital);
    
            
            console.log("Mining... please wait");
            await Txn2.wait();
    
            console.log(`Mined, see transaction: https://goerli.etherscan.io/tx/${Txn2.hash}`);
            
            //balance capture
       
            var elem = document.getElementById("alertid");
		  elem.classList.add("show");
		  setTimeout(function(){
			elem.classList.remove("show");
		  }, 3000);

        
         clear();
          
        
          } else {
            console.log("Ethereum object does not exist");
            var elem = document.getElementById("alertidf");
            elem.classList.add("show");
            setTimeout(function(){
              elem.classList.remove("show");
            }, 3000);
    
          }
    
        } catch (err) {
          console.log(err);
          var elem = document.getElementById("alertidf");
		elem.classList.add("show");
		setTimeout(function(){
			elem.classList.remove("show");
		  }, 3000);
    
        }
      }

      useEffect(() => {
        setacc();
      });
  

 

  return (
    <>
	<Loader></Loader>
    <div className="alert alert-info text-center" role="alert">
    Patient Information Add Panel
    </div>
    <div className="container shadow-lg p-3 mb-5 bg-white rounded mt-3">
      <form className="needs-validation" id="myForm" noValidate>
        <div className="alert alert-danger" role="alert">
          Note : You will Spend ETH While Saving Data
        </div>
        <div className="alert alert-info" role="alert">
          Profile data
        </div>
       
        <div className="form-row">

        <div className="col-lg-4 col-md-6 mb-3">
          <label htmlFor="validationCustom01">Patient ID</label>
          <input type="number" className="form-control" id="pid" required />
          <div className="valid-feedback">Looks good!</div>
        </div>


          <div className="col-lg-2 col-md-6 mb-3">
            <label htmlFor="validationCustom01">First name</label>
            <input type="text" className="form-control" id="fname" required />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className=" col-lg-2 col-md-6 mb-3">
            <label htmlFor="validationCustom01">Middle name</label>
            <input type="text" className="form-control" id="mname" required />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-lg-2 col-md-6 mb-3">
            <label htmlFor="validationCustom02">Last name</label>
            <input type="text" className="form-control" id="lname" required />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationCustom04">Gender</label>
            <select className="custom-select" id="gender" required>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Cant Say">Cant say</option>
            </select>
            <div className="invalid-feedback">Please select a valid Gender</div>
          </div>
          <div className="col-lg-2 col-md-6 mb-3">
            <label htmlFor="validationCustom02">Date Of Birth</label>
            <input
              type="date"
              className="form-control"
              id="dateofbirth"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          <div className="col-lg-2 col-md-6 mb-3">
            <label htmlFor="validationCustom02">Phone Number</label>
            <input
              type="number"
              className="form-control"
              id="phonenumber"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
        </div>
        <div className="form-row">
        <div className="col-lg-6 form-group">
          <label htmlFor="inputAddress">Address</label>
          <input
            type="text"
            className="form-control"
            id="address1"
            placeholder="Flat , Wing , House Name"
          />
        </div>
        <div className="col-lg-6 form-group">
          <label htmlFor="inputAddress2">Address 2</label>
          <input
            type="text"
            className="form-control"
            id="address2"
            placeholder="Street , Area"
          />
        </div>
        </div>
        <div className="form-row">
          <div className="col-lg-2 col-md-6 mb-3">
            <label htmlFor="validationCustom03">City</label>
            <input type="text" className="form-control" id="city" required />
            <div className="invalid-feedback">Please provide a valid city.</div>
          </div>

          <div className="col-lg-2 col-md-3 mb-3">
            <label htmlFor="validationCustom04">State</label>
            <input type="text" className="form-control" id="state" required />
            <div className="invalid-feedback">Please select a valid state.</div>
          </div>
          <div className="col-lg-2 col-md-3 mb-3">
            <label htmlFor="validationCustom05">Zip</label>
            <input type="text" className="form-control" id="zipcode" required />
            <div className="invalid-feedback">Please provide a valid zip.</div>
          </div>
        </div>
        <div className="alert alert-info" role="alert">
          Medical data
        </div>

        <div className="form-group col-lg-4">
          <label htmlFor="validationCustom02">Doctor ID</label>
          <input
            type="text"
            className="form-control"
            value={account}
            disabled
            id="doctorHospital"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Diagnoses</label>
          <textarea className="form-control" id="diagnoses" rows="3"></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">
            {" "}
            medications/Medicines
          </label>
          <textarea className="form-control" id="medicines" rows="3"></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Health Surveys</label>
          <textarea
            className="form-control"
            id="healthsurvey"
            rows="3"
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">lab tests</label>
          <textarea className="form-control" id="labtest" rows="3"></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Any Past Histroy</label>
          <textarea
            className="form-control"
            id="pasthistroy"
            rows="3"
          ></textarea>
        </div>
      </form>
      <button onClick={savedata} className="btn bt2 btn-success mb-5">
        Save
      </button>

      <button onClick={clear} className="btn bt1 btn-danger ">
        Clear
      </button>

    </div>
    </>
  );
}

export default AddPatientComponent

