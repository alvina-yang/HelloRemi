import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  getPatientCode, setPatientCode, setPatientName, setUsername, setPassword, 
  setAge, setDOB, setRelationship, setFamilyBackground, setHobbiesAndInterests, 
  setMemorableEvent, setMemorableQuotes, setAdditionalInformation, getUsername,
  getPassword, getName, getAge, getDOB, getFamilyBackground, getHobbiesAndInterests, 
  getMemorableQuotes, getRelationship, getMemorableEvent, getAdditionalInformation
} from '../LocalData';

const CreateAccount = () => {
  const navigate = useNavigate();

  // State for patient sign up
  const [isSigningUpPatient, setIsSigningUpPatient] = useState(null);
  const [patientFirstName, setPatientFirstName] = useState('');
  const [patientLastName, setPatientLastName] = useState('');
  const [patientCodeInput, setPatientCodeInput] = useState('');

  // State for additional fields
  const [username, setUsernameLocal] = useState('');
  const [password, setPasswordLocal] = useState('');
  const [name, setName] = useState('');
  const [age, setAgeLocal] = useState('');
  const [dob, setDOBLocal] = useState(''); // Date of Birth
  const [relationship, setRelationshipLocal] = useState('');
  const [familyBackground, setFamilyBackgroundLocal] = useState('');
  const [hobbiesAndInterests, setHobbiesAndInterestsLocal] = useState('');
  const [memorableQuotes, setMemorableQuotesLocal] = useState('');
  const [memorableEvent, setMemorableEventLocal] = useState('');
  const [additionalInformation, setAdditionalInformationLocal] = useState('');

  useEffect(() => {
    if (!getPatientCode()) {
      setPatientCode(Math.random().toString(36).substr(2, 9));
    }
  }, []);

  const handleCreateAccount = async () => {
    if (isSigningUpPatient) {
      const fullName = patientFirstName && patientLastName ? `${patientFirstName} ${patientLastName}` : 'Jane Doe';
      setPatientName(fullName);
    } else {
      setPatientCode(patientCodeInput);
    }

    setUsername(username);
    setPassword(password);
    setName(name); 
    setAge(age);
    setDOB(dob);
    setRelationship(relationship);
    setFamilyBackground(familyBackground);
    setHobbiesAndInterests(hobbiesAndInterests);
    setMemorableEvent(memorableEvent);
    setMemorableQuotes(memorableQuotes);
    setAdditionalInformation(additionalInformation);
    navigate('/home');

    const accountData = {
      username: getUsername(),
      password: getPassword(),
      name: getName(),
      age: getAge(),
      dob: getDOB(),
      familyBackground: getFamilyBackground(),
      hobbiesAndInterests: getHobbiesAndInterests(),
      memorableQuotes: getMemorableQuotes(),
      relationship: getRelationship(),
      memorableEvent: getMemorableEvent(),
      additionalInformation: getAdditionalInformation(),
    };

    // API endpoint - ensure this is correct and server is running
    const apiEndpoint = 'https://local:5177';

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(accountData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log(responseData);
      navigate('/home');
    } catch (error) {
      console.error('Failed to create account:', error);
    }
  };

  if (isSigningUpPatient === null) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-primary">
        <h1 className="text-3xl font-bold text-h1text mb-4">Are you signing up a patient?</h1>
        <div className="flex space-x-4">
          <button 
            onClick={() => setIsSigningUpPatient(true)}
            className="px-4 py-2 bg-secondary text-white rounded hover:bg-gray-600"
          >
            Yes
          </button>
          <button 
            onClick={() => setIsSigningUpPatient(false)}
            className="px-4 py-2 bg-secondary text-white rounded hover:bg-gray-600"
          >
            No
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary p-6">
      <h1 className="text-2xl font-bold mb-6 text-h1text">Create an Account</h1>
      {isSigningUpPatient && <h2 className="text-h2text">Patient Access Code: {getPatientCode()}</h2>}
      <div className="w-full max-w-md bg-secondary p-6 rounded shadow-md">
        {isSigningUpPatient ? (
          <div className="flex flex-col space-y-4">
            <input 
              className="p-2 border bg-blue-900 border-peach-300 rounded" 
              type="text" 
              placeholder="Patient First Name" 
              value={patientFirstName}
              onChange={(e) => setPatientFirstName(e.target.value)}
            />
            <input 
              className="p-2 border bg-blue-900 border-peach-300 rounded" 
              type="text" 
              placeholder="Patient Last Name" 
              value={patientLastName}
              onChange={(e) => setPatientLastName(e.target.value)}
            />
          </div>
        ) : (
          <div className="flex flex-col space-y-4">
            <input className="p-2 border bg-blue-900 border-peach-300 rounded" type="text" placeholder="Enter Patient Code" />
          </div>
        )}
        <div className="flex flex-col space-y-4 mt-4">
          <input className="p-2 border bg-blue-900 border-peach-300 rounded" value={name} type="text" placeholder="Your First Name" />
          <input className="p-2 border bg-blue-900 border-peach-300 rounded" value={lastname} type="text" placeholder="Your Last Name" />
          <input className="p-2 border bg-blue-900 border-peach-300 rounded" value={username} type="text" placeholder="Your Username" />
          <input className="p-2 border bg-blue-900 border-peach-300 rounded"  value={password} type="password" placeholder="Your Password" />
          <input className="p-2 border bg-blue-900 border-peach-300 rounded"  value={age} type="text" placeholder="Your Age" />
          <input className="p-2 border bg-blue-900 border-peach-300 rounded"  value={username} type="date" placeholder="Your Date of Birth" />
          <input className="p-2 border bg-blue-900 border-peach-3000 rounded"  value={relationship} type="text" placeholder="Your Relationship to Patient" />
          <input className="p-2 border bg-blue-900 border-peach-300 rounded"  value={familyBackground} type="text" placeholder="Your Family Background" />
          <input className="p-2 border bg-blue-900 border-peach-300 rounded"  value={hobbiesAndInterests} type="text" placeholder="Your Hobbies and Interests" />
          <input className="p-2 border bg-blue-900 border-peach-300 rounded"  value={memorableQuotes} type="text" placeholder="Your Memorable quotes" />
          <input className="p-2 border bg-blue-900 border-peach-300 rounded"  value={memorableEvent} type="text" placeholder="Your Memorable event" />
          <input className="p-2 border bg-blue-900 border-peach-300 rounded"  value={additionalInformation} type="text" placeholder="Additional Information" />
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
