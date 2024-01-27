import React from 'react';
import { Link } from 'react-router-dom';
import { getPatientName, getPatientCode } from '../GlobalData'; // Adjust the import path as needed
import NavBar from './NavBar';
const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div className='bg-secondary p-3 text-center text-h1text text-xl font-bold'>
        Home
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-primary p-6">
      <h1 className="text-4xl text-h1text font-bold text-center mb-4">Welcome to your personalized story for {getPatientName()}</h1>
      <p className="mb-6 text-lg text-h2text text-center">
        Explore the stories, create new adventures, and edit existing ones. Your journey awaits!
      </p>
      <div className="space-y-4">
        <Link to="/create-new-story" className="block w-64 px-4 py-2 text-center text-white bg-secondary rounded hover:bg-blue-600">
          Create A New Story
        </Link>
        <Link to="/edit-story" className="block w-64 px-4 py-2 text-center text-white bg-secondary rounded hover:bg-blue-600">
          Edit Your Story
        </Link>
        <Link to="/current-stories" className="block w-64 px-4 py-2 text-center text-white bg-secondary rounded hover:bg-blue-600">
          {`${getPatientName()}'s Current Stories`}
        </Link>
      </div>
      <div className='p-3 text-peach-300'>
        <h3>Patient Code: {getPatientCode()}</h3>
      </div>
    </div>
    </div>
  );
};

export default HomePage;
