import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const MemberProfilePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { member } = location.state;

  // Function to handle the back button click
  const handleBackClick = () => {
    navigate('/patient-home'); // Navigate back to the Patient Home Page
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-primary">
      <div className="absolute top-0 left-0 p-4">
        <button onClick={handleBackClick} className="flex items-center text-white">
          <ArrowBackIosIcon />
          <span>Back</span>
        </button>
      </div>
      <img src={member.picture} alt={member.name} className="w-full h-full rounded-full mb-4" />
    </div>
  );
};

export default MemberProfilePage;
