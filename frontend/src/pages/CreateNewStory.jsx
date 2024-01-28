import React, { useState } from 'react';
import NavBar from './NavBar';

const CreateNewStory = () => {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = async () => {
    const trimmedInput = inputValue.trim();
    if (trimmedInput) {
      // Add the message to local state
      setMessages([...messages, trimmedInput]);

      // Prepare data to be sent
      const dataToSend = {
        message: trimmedInput
      };

      // API endpoint - replace with your actual endpoint
      const apiEndpoint = 'https://localhost:723432';

      try {
        const response = await fetch(apiEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(dataToSend)
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // You can process the response here if needed
        console.log("Message sent successfully");
      } catch (error) {
        console.error('Failed to send message:', error);
      }

      // Clear the input after sending the message
      setInputValue('');
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className='bg-secondary p-3 text-center text-h1text text-xl font-bold'>
        Create A New Story
      </div>
      <div className="flex-grow p-4 overflow-auto bg-primary">
        {/* Messages will be displayed here */}
        <div className="flex flex-col items-end space-y-2">
          {messages.map((message, index) => (
            <div key={index} className="max-w-xs break-words bg-secondary p-2 rounded">
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
