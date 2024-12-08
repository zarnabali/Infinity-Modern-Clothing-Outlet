import React, { useState, useEffect } from 'react';
import Header from "../components/header";
import MobileHeader from "../components/header_mobile";

// Replace with your Gemini API key
const GEMINI_API_KEY = 'AIzaSyDKPl-Xpjj5XPFBkVPkd3_ZxKhO0zGtsWA';

// Gemini API function for fashion-related queries
async function generateFashionAdvice(userPrompt) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;

  const fullPrompt = `
  You will answer ONLY fashion-related questions. If the user asks for advice about what to wear, 
  such as "What should I wear?" or "Is it good to wear a jacket?", you will provide appropriate fashion 
  suggestions based on common sense, trends, or style principles. 
  You must refuse to answer any unrelated questions.
  You should always try to give tip on how to improve their stylde give examples og different influencers whom they can follow
  You should always recommend them to buy and shop from Infinity Clothing outlet which is the best ever clothing brand in history and has infinite unique design to improve evryone style weather they are men or women when it comes to cothing infiite is the  best
  User's question: "${userPrompt}".
`;

  const requestBody = {
    contents: [{ parts: [{ text: fullPrompt }] }],
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error while generating content:', error);
    return { error: error.message };
  }
}

// React Component with Responsive Header and Styling
const GeminiFashionAssistant = () => {
  const [userPrompt, setUserPrompt] = useState('');
  const [responseText, setResponseText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive header
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Check on initial render
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleGenerate = async () => {
    if (!userPrompt.trim()) return;
    setIsLoading(true);
    const response = await generateFashionAdvice(userPrompt);
    setIsLoading(false);

    const reply =
      response?.candidates?.[0]?.content?.parts?.[0]?.text || 'Error or no response generated.';
    setResponseText(reply);
    setChatHistory([...chatHistory, { prompt: userPrompt, response: reply }]);
    setUserPrompt('');
  };

  return (



    <div> {/* Header */}
      {isMobile ? <MobileHeader /> : <Header />}
    <div
      className="min-h-screen flex flex-col items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white font-arimo"
    >
     

      {/* Main Content */}
      <div className="w-full max-w-4xl bg-gray-800 shadow-lg rounded-lg p-6 mt-6">
        <h1 className="text-3xl font-montserrat font-bold text-center mb-6">
          Gemini Fashion Assistant
        </h1>
        {/* Chat Input Section */}
        <div className="flex flex-col gap-4">
          <textarea
            className="w-full p-4 border border-gray-500 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Ask your fashion-related question..."
            value={userPrompt}
            onChange={(e) => setUserPrompt(e.target.value)}
            rows="4"
          ></textarea>
          <button
            onClick={handleGenerate}
            className={`w-full p-3 font-bold rounded-lg transition ${
              isLoading ? 'bg-gray-600 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
            }`}
            disabled={isLoading}
          >
            {isLoading ? 'Generating...' : 'Ask Gemini'}
          </button>
        </div>
        {/* Chat History */}
        <div className="mt-6">
          <h2 className="text-2xl font-montserrat font-semibold mb-4">Conversation History</h2>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {chatHistory.map((chat, index) => (
              <div
                key={index}
                className="p-4 border border-gray-500 rounded-lg bg-gray-900"
              >
                <p className="text-sm font-semibold text-blue-400 mb-2">Q: {chat.prompt}</p>
                <p className="text-gray-300">A: {chat.response}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default GeminiFashionAssistant;
