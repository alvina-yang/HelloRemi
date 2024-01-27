import React, { useState } from 'react';
import NavBar from './NavBar';

const EditStory = () => {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, inputValue.trim()]);
      setInputValue(''); // Clear the input after sending the message
    }
  };

  const handleViewProfile = (member) => {
    navigate('/member-profile', { state: { member } });
  };
  

  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className='bg-secondary p-3 text-center text-h1text text-xl font-bold'>
        Edit Your Existing Story
      </div>
      <div className="flex-grow p-4 overflow-auto bg-primary">
        <div className="flex flex-col items-end space-y-2">
          {messages.map((message, index) => (
            <div key={index} className="max-w-xs break-words bg-secondary p-2 rounded self-end">
              {message}
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 bg-secondary">
        <form 
          onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
          className="flex gap-2"
        >
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Message HelloRemi"
            className="flex-grow p-2 bg-primary rounded"
          />
          <button
            type="submit"
            className="p-2 text-white bg-primary rounded hover:bg-blue-600"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditStory;
