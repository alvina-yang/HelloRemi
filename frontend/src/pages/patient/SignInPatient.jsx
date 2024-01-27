import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { patients } from '../../constants/Index'; // Update the path as needed
import { setPatientCode as setGlobalPatientCode } from '../../LocalData'; // Renamed import to avoid conflict

const SignInPatient = () => {
  const [localPatientCode, setLocalPatientCode] = useState(''); // Renamed local state variable
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const matchedPatient = patients.find(patient => patient.patientCode.toString() === localPatientCode);

    if (matchedPatient) {
      setGlobalPatientCode(localPatientCode); // Use renamed function to update global patientCode
      navigate('/patient-home');
    } else {
      setErrorMessage("Invalid patient code. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-primary">
      <form onSubmit={handleSubmit} className="w-full max-w-xs">
        <input
          type="text"
          value={localPatientCode}
          onChange={(e) => setLocalPatientCode(e.target.value)}
          placeholder="Enter Patient Code"
          className="w-full p-2 text-lg border rounded border-gray-300"
        />
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <button
          type="submit"
          className="w-full p-2 mt-4 text-lg text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignInPatient;
