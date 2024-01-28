import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { getStory } from '../LocalData';

const CreateNewStory = () => {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const story = getStory();
    if (story) {
      setMessages([...messages, { text: story, fromBot: true }]);
    }
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = async () => {
    const trimmedInput = inputValue.trim();
    if (trimmedInput) {
      setMessages([...messages, { text: trimmedInput, fromBot: false }]);
      setInputValue(''); // Clear the input after sending the message
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className='bg-secondary p-3 text-center text-h1text text-xl font-bold'>
        Create A New Story
      </div>
      <div className="flex-grow p-4 overflow-auto bg-primary">
        <div className="flex flex-col space-y-2">
          {messages.map((message, index) => (
            <div key={index} className={`max-w-xs break-words p-2 rounded ${message.fromBot ? 'bg-blue-600' : 'bg-secondary self-end'}`}>
              {message.text}
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
            placeholder="Message HelloRemi by entering your favourite memory."
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

export default CreateNewStory;
