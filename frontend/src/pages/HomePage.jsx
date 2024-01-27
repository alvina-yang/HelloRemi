import React from 'react';
import { Link } from 'react-router-dom';
import { getPatientName, getPatientCode } from '../GlobalData'; // Adjust the import path as needed

const HomePage = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/create-new-story">Create New Story</Link></li>
          <li><Link to="/edit-story">Edit Story</Link></li>
          <li><Link to="/current-stories">{`${getPatientName()} & ${getPatientCode()}'s Current Stories`}</Link></li>
        </ul>
      </nav>
      {/* Content of HomePage */}
    </div>
  );
};

export default HomePage;
