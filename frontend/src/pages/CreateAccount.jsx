import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPatientCode, setPatientCode, setPatientName } from '../GlobalData';

const CreateAccount = () => {
  const navigate = useNavigate();
  const [isSigningUpPatient, setIsSigningUpPatient] = useState(null);
  const [patientFirstName, setPatientFirstName] = useState('');
  const [patientLastName, setPatientLastName] = useState('');
  const [patientCodeInput, setPatientCodeInput] = useState('');

  
  useEffect(() => {
    if (!getPatientCode()) {
      setPatientCode(Math.random().toString(36).substr(2, 9));
    }
  }, []);

  const handleCreateAccount = () => {
    if (isSigningUpPatient) {
      const fullName = patientFirstName && patientLastName ? `${patientFirstName} ${patientLastName}` : 'Jane Doe';
      setPatientName(fullName);
    } else {
      setPatientCode(patientCodeInput);
    }
    navigate('/home');
  };

  if (isSigningUpPatient === null) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-black">
        <h1 className="text-3xl font-bold text-white mb-4">Are you signing up a patient?</h1>
        <div className="flex space-x-4">
          <button 
            onClick={() => setIsSigningUpPatient(true)}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Yes
          </button>
          <button 
            onClick={() => setIsSigningUpPatient(false)}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            No
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-6">
      <h1 className="text-2xl font-bold mb-6 text-white">Create an Account</h1>
      {isSigningUpPatient && <h2 className="text-white">Patient Access Code: {getPatientCode()}</h2>}
      <div className="w-full max-w-md bg-gray-700 p-6 rounded shadow-md">
        {isSigningUpPatient ? (
          <div className="flex flex-col space-y-4">
            <input 
              className="p-2 border border-gray-300 rounded" 
              type="text" 
              placeholder="Patient First Name" 
              value={patientFirstName}
              onChange={(e) => setPatientFirstName(e.target.value)}
            />
            <input 
              className="p-2 border border-gray-300 rounded" 
              type="text" 
              placeholder="Patient Last Name" 
              value={patientLastName}
              onChange={(e) => setPatientLastName(e.target.value)}
            />
            <input className="p-2 border border-gray-300 rounded" type="text" placeholder="Patient Gender" />
            <input className="p-2 border border-gray-300 rounded" type="text" placeholder="Your Relationship to Patient" />
          </div>
        ) : (
          <div className="flex flex-col space-y-4">
            <input className="p-2 border border-gray-300 rounded" type="text" placeholder="Enter Patient Code" />
            <input className="p-2 border border-gray-300 rounded" type="text" placeholder="Your Relationship to Patient" />
          </div>
        )}
        <div className="flex flex-col space-y-4 mt-4">
          <input className="p-2 border border-gray-300 rounded" type="text" placeholder="Your First Name" />
          <input className="p-2 border border-gray-300 rounded" type="text" placeholder="Your Last Name" />
          <input className="p-2 border border-gray-300 rounded" type="text" placeholder="Your Username" />
          <input className="p-2 border border-gray-300 rounded" type="password" placeholder="Your Password" />
          <button 
            onClick={handleCreateAccount} 
            className="p-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
