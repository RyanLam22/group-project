import React, { useState } from 'react';
import axios from 'axios';

const ChatGPTTest = () => {
  const [inputText, setInputText] = useState('');
  const [responseText, setResponseText] = useState('');
  const apiEndpoint = 'https://api.openai.com/v1/engines/davinci/completions'; // Replace with your actual API endpoint

  const handleGenerateResponse = async () => {
    try {
      const APIKEY = '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';
      const response = await axios.post(
        apiEndpoint,
        {
          prompt: inputText,
          max_tokens: 100, // Adjust as needed
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_SECRET}` // Replace with your actual API key
          },
        }
      );

      setResponseText(response.data.choices[0]?.text || 'No response from API');
    } catch (error) {
      console.error('Error generating response:', error);
      setResponseText('Error generating response');
    }
  };

  return (
    <div>
      <h1>ChatGPT API Test</h1>
      <textarea
        rows="4"
        cols="50"
        placeholder="Enter your prompt here..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <br />
      <button onClick={handleGenerateResponse}>Generate Response</button>
      <br />
      <h2>Response:</h2>
      <pre>{responseText}</pre>
    </div>
  );
};

export default ChatGPTTest;
