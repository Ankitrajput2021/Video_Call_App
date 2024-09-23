import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Homepage.css';  

const Homepage = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/room/${input}`); // Use backticks for template literal
  };

  return (
    <div className="homepage-container">
      <div className="homepage-content">
        <h1 className="homepage-title">Join a One-to-One Call</h1>
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Enter Room ID/Create Room"
          className="input-field"
        />
        <button onClick={handleClick} className="join-btn">Join</button>
      </div>
      <footer className="footer">
        <p>© 2024 Ankit Kumar</p>
      </footer>
    </div>
  );
};

export default Homepage;
