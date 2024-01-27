import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../NavBar';
import { members, relations } from '../../constants/Index';
import { getPatientCode, getPatientName } from '../../LocalData';

const PatientHomePage = () => {
    const navigate = useNavigate();
    const [selectedStory, setSelectedStory] = useState(null);
    const [relatedMembers, setRelatedMembers] = useState([]);

    useEffect(() => {
        const patientCode = getPatientCode();
        const relation = relations.find(rel => rel.patientCode.toString() === patientCode);
        if (relation) {
          const filteredMembers = members.filter(member => relation.userNames.includes(member.username));
          setRelatedMembers(filteredMembers);
        }
    }, []);

    const handleSelectStory = (story) => {
      setSelectedStory(story);
    };

    const handleViewProfile = (member) => {
      navigate('/member-profile', { state: { member } });
    };

    return (
        <div className='bg-primary'>
            <div className='flex flex-col p-10 items-center'>
                <div className="w-32 h-32 bg-tertiary rounded-full p-10 mt-6 flex items-center justify-center">
                    <span className="text-5xl font-bold text-primary">{getPatientName().charAt(0)}</span>
                </div>
                <h1 className='text-7xl text-h1text font-bold mt-3'>{getPatientName()}</h1>
            </div>
            <div className="p-6 min-h-screen bg-primary flex flex-col">
                <h2 className="text-2xl text-center text-h1text font-bold mb-6">Relationships</h2>
                <div className="flex bg-primary flex-wrap justify-center gap-4">
                    {relatedMembers.map((member, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div
                                className="w-24 h-24 bg-tertiary rounded-full flex items-center justify-center cursor-pointer"
                                onClick={() => handleSelectStory(member.story)}
                            >
                                <h1 className='bg-transparent text-xl font-bold text-dustyblue-950'>{member.name.charAt(0)}</h1>
                            </div>
                            <h3 className="text-lg text-peach-300 font-semibold mt-2">{member.name}</h3>
                            <p className="text-sm text-peach-400">{member.relationship}</p>
                            <button
                                onClick={() => handleViewProfile(member)}
                                className="mt-2 p-2 text-white bg-dustygray-800 rounded hover:bg-blue-600"
                            >
                                View Profile
                            </button>
                        </div>
                    ))}
                </div>

                {selectedStory && (
                    <div className="mt-8 p-4 border rounded">
                        <h4 className="text-lg text-dustygray-300 font-bold mb-2">Story Details</h4>
                        <p className='text-peach-300'>{selectedStory}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PatientHomePage;
