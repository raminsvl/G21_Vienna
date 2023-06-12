import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');

  const handleCreateProfile = async () => {
    console.log(JSON.stringify({ name }));

    try {
      const response = await fetch('http://localhost:5006/Munch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });

      if (response.ok) {
        console.log('Profile created successfully!');
      } else {
        console.log('Failed to create profile.');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleCreateProfile}>Create Profile</button>
    </div>
  );
}

export default App;