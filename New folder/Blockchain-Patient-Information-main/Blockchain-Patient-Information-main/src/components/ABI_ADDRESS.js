const PatientContractAddress="0x89D128e174E05e2bEf51eFA05D2A2D2c787d83E0";
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
		"inputs": [],
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
		"inputs": [],
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

