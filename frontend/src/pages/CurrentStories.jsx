import React, { useState } from 'react';
import { members } from '../constants/Index';
import NavBar from './NavBar';
import { getPatientName } from '../LocalData';

const CurrentStories = () => {
  const [selectedStory, setSelectedStory] = useState(null);

  const handleSelectStory = (story) => {
    setSelectedStory(story);
  };

  return (
    <div className='bg-primary'>
      <NavBar />
      <div className='bg-secondary p-3 text-center text-h1text text-xl font-bold'>
        {getPatientName()}'s Stories
      </div>
      <div className="p-6 min-h-screen bg-primary flex flex-col">
        <h1 className="text-2xl text-h1text font-bold mb-6">Current Stories</h1>
        <div className="flex bg-primary flex-wrap justify-center gap-4">
          {members.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center cursor-pointer"
                onClick={() => handleSelectStory(member.story)}
                style={{ backgroundImage: `url(${member.picture})`, backgroundSize: 'cover' }}
              >
                {/* Removed the initial character rendering */}
              </div>
              <h2 className="text-lg text-peach-300 font-semibold mt-2">{member.name}</h2>
              <p className="text-sm text-peach-400">{member.relationship}</p>
            </div>
          ))}
        </div>

        {selectedStory && (
          <div className="mt-8 p-4 border rounded">
            <h2 className="text-lg text-dustygray-300 font-bold mb-2">Story Details</h2>
            <p className='text-peach-300'>{selectedStory}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CurrentStories;
