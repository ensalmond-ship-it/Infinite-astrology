/*
 * App.js - The main page of our Astrology Hub
 * 
 * This is the first thing people see when they visit the website
 * It has:
 * - A welcome message
 * - Text-to-speech button
 * - Easy mode toggle
 * - A form to enter birth information
 */

import React, { useState } from 'react';
import './App.css';

// This is our main App component
function App() {
  // State = information that can change
  // We use useState to track these changes
  
  // Easy mode on/off
  const [easyMode, setEasyMode] = useState(false);
  
  // Form data - what the user enters
  const [formData, setFormData] = useState({
    name: '',
    birthDate: '',
    birthTime: '',
    birthLocation: ''
  });
  
  // Whether we're reading text out loud
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Function: Read text out loud
  // This uses the browser's built-in text-to-speech
  const speakText = (text) => {
    // Create a speech object
    const speech = new SpeechSynthesisUtterance(text);
    
    // Set voice properties for clarity
    speech.rate = 0.9; // Slightly slower
    speech.pitch = 1;
    speech.volume = 1;
    
    // Mark that we're speaking
    setIsSpeaking(true);
    
    // When finished speaking, mark it
    speech.onend = () => {
      setIsSpeaking(false);
    };
    
    // Make the browser speak
    window.speechSynthesis.speak(speech);
  };

  // Function: Toggle easy mode on/off
  const toggleEasyMode = () => {
    setEasyMode(!easyMode);
    
    // Tell the user what happened
    const message = easyMode ? 'Easy mode off' : 'Easy mode on';
    speakText(message);
  };

  // Function: Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Update the form data
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Function: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Don't refresh the page
    
    // For now, just show what they entered
    console.log('Birth Info:', formData);
    speakText(`Thank you ${formData.name}! We're calculating your birth chart.`);
    
    // TODO: Send this data to the backend
  };

  // Decide what class to use based on easy mode
  const pageClass = easyMode ? 'app easy-mode' : 'app';

  return (
    <div className={pageClass}>
      {/* Header with accessibility controls */}
      <header className="header">
        <h1>🌟 Infinite Astrology Hub 🌟</h1>
        
        <div className="accessibility-controls">
          {/* Text-to-speech button */}
          <button 
            onClick={() => speakText('Welcome to Infinite Astrology Hub')}
            disabled={isSpeaking}
            aria-label="Read page out loud"
          >
            {isSpeaking ? '🔊 Reading...' : '🔊 Read to Me'}
          </button>
          
          {/* Easy mode toggle */}
          <button 
            onClick={toggleEasyMode}
            aria-label={easyMode ? "Switch to detailed mode" : "Switch to easy mode"}
            className={easyMode ? 'active' : ''}
          >
            {easyMode ? '📖 Detailed Mode' : '📖 Easy Mode'}
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className="main-content">
        <section className="welcome">
          <h2>Welcome to Your Personal Astrology Guide</h2>
          
          {easyMode ? (
            <p>
              This app helps you understand your astrology. <br/>
              We'll find the best places for you to live. <br/>
              We'll help your family too. <br/>
              Everything is read out loud for you.
            </p>
          ) : (
            <p>
              Welcome to Infinite Astrology Hub, your all-in-one destination for 
              comprehensive astrological insights. We combine ancient astrological 
              knowledge with modern technology to provide you with:
            </p>
          )}
          
          <ul>
            <li>✨ Your personal birth chart</li>
            <li>📍 Best places to live for you</li>
            <li>👨‍👩‍👧 Information for your family</li>
            <li>📖 Daily readings and guidance</li>
            <li>🔊 Everything read out loud</li>
          </ul>
        </section>

        {/* Birth information form */}
        <section className="birth-form">
          <h2>Let's Start: Tell Us About Your Birth</h2>
          
          <form onSubmit={handleSubmit}>
            {/* Name input */}
            <div className="form-group">
              <label htmlFor="name">
                Your Name:
                <button 
                  type="button" 
                  onClick={() => speakText('What is your name?')}
                  className="speak-btn"
                  aria-label="Read label"
                >
                  🔊
                </button>
              </label>
              <input 
                type="text" 
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Birth date input */}
            <div className="form-group">
              <label htmlFor="birthDate">
                Birth Date (MM/DD/YYYY):
                <button 
                  type="button" 
                  onClick={() => speakText('What is your birth date?')}
                  className="speak-btn"
                  aria-label="Read label"
                >
                  🔊
                </button>
              </label>
              <input 
                type="text" 
                id="birthDate"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleInputChange}
                placeholder="03/15/1995"
                required
              />
            </div>

            {/* Birth time input */}
            <div className="form-group">
              <label htmlFor="birthTime">
                Birth Time (HH:MM AM/PM):
                <button 
                  type="button" 
                  onClick={() => speakText('What time were you born?')}
                  className="speak-btn"
                  aria-label="Read label"
                >
                  🔊
                </button>
              </label>
              <input 
                type="text" 
                id="birthTime"
                name="birthTime"
                value={formData.birthTime}
                onChange={handleInputChange}
                placeholder="02:30 PM"
              />
            </div>

            {/* Birth location input */}
            <div className="form-group">
              <label htmlFor="birthLocation">
                Birth Location (City, State):
                <button 
                  type="button" 
                  onClick={() => speakText('Where were you born?')}
                  className="speak-btn"
                  aria-label="Read label"
                >
                  🔊
                </button>
              </label>
              <input 
                type="text" 
                id="birthLocation"
                name="birthLocation"
                value={formData.birthLocation}
                onChange={handleInputChange}
                placeholder="New York, NY"
                required
              />
            </div>

            {/* Submit button */}
            <button type="submit" className="submit-btn">
              Get My Birth Chart ✨
            </button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>
          🌙 Infinite Astrology Hub - Designed for everyone 🌙<br/>
          Made with accessibility and love ❤️
        </p>
      </footer>
    </div>
  );
}

export default App;