import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  getPatientCode, setPatientCode, setPatientName, setUsername, setPassword, 
  setAge, setDOB, setRelationship, setFamilyBackground, setHobbiesAndInterests, 
  setMemorableEvent, setMemorableQuotes, setAdditionalInformation
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
  const [name, setNameLocal] = useState('');
  const [age, setAgeLocal] = useState('');
  const [dob, setDOBLocal] = useState('');
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
    setPatientName(name); 
    setAge(age);
    setDOB(dob);
    setRelationship(relationship);
    setFamilyBackground(familyBackground);
    setHobbiesAndInterests(hobbiesAndInterests);
    setMemorableEvent(memorableEvent);
    setMemorableQuotes(memorableQuotes);
    setAdditionalInformation(additionalInformation);

    const accountData = {
      username,
      password,
      name,
      age,
      dob,
      familyBackground,
      hobbiesAndInterests,
      memorableQuotes,
      relationship,
      memorableEvent,
      additionalInformation,
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
        <div className="flex flex-col space-y-4">
          {isSigningUpPatient && (
            <>
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
            </>
          )}
          {!isSigningUpPatient && (
            <input 
              className="p-2 border bg-blue-900 border-peach-300 rounded" 
              type="text" 
              placeholder="Enter Patient Code" 
              value={patientCodeInput}
              onChange={(e) => setPatientCodeInput(e.target.value)}
            />
          )}
          <input className="p-2 border bg-blue-900 border-peach-300 rounded" value={name} type="text" placeholder="Your First Name" onChange={(e) => setNameLocal(e.target.value)} />
          <input className="p-2 border bg-blue-900 border-peach-300 rounded" value={patientLastName} type="text" placeholder="Your Last Name" onChange={(e) => setPatientLastName(e.target.value)} />
          <input className="p-2 border bg-blue-900 border-peach-300 rounded" value={username} type="text" placeholder="Your Username" onChange={(e) => setUsernameLocal(e.target.value)} />
          <input className="p-2 border bg-blue-900 border-peach-300 rounded" value={password} type="password" placeholder="Your Password" onChange={(e) => setPasswordLocal(e.target.value)} />
          <input className="p-2 border bg-blue-900 border-peach-300 rounded" value={age} type="text" placeholder="Your Age" onChange={(e) => setAgeLocal(e.target.value)} />
          <input className="p-2 border bg-blue-900 border-peach-300 rounded" value={dob} type="date" placeholder="Your Date of Birth" onChange={(e) => setDOBLocal(e.target.value)} />
          <input className="p-2 border bg-blue-900 border-peach-300 rounded" value={relationship} type="text" placeholder="Your Relationship to Patient" onChange={(e) => setRelationshipLocal(e.target.value)} />
          <input className="p-2 border bg-blue-900 border-peach-300 rounded" value={familyBackground} type="text" placeholder="Your Family Background" onChange={(e) => setFamilyBackgroundLocal(e.target.value)} />
          <input className="p-2 border bg-blue-900 border-peach-300 rounded" value={hobbiesAndInterests} type="text" placeholder="Your Hobbies and Interests" onChange={(e) => setHobbiesAndInterestsLocal(e.target.value)} />
          <input className="p-2 border bg-blue-900 border-peach-300 rounded" value={memorableQuotes} type="text" placeholder="Your Memorable quotes" onChange={(e) => setMemorableQuotesLocal(e.target.value)} />
          <input className="p-2 border bg-blue-900 border-peach-300 rounded" value={memorableEvent} type="text" placeholder="Your Memorable event" onChange={(e) => setMemorableEventLocal(e.target.value)} />
          <input className="p-2 border bg-blue-900 border-peach-300 rounded" value={additionalInformation} type="text" placeholder="Additional Information" onChange={(e) => setAdditionalInformationLocal(e.target.value)} />
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
