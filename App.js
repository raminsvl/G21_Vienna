import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UsernamePage from './UsernamePage';
import Explanation from './Explanation';
import Explanation2 from './Explanation2'; 
import Explanation3 from './Explanation3'; 
import Explanation4 from './Explanation4'; 
import Explanation5 from './Explanation5'; 
import Explanation6 from './Explanation6'; 
import JoinGame from './JoinGame';
import WaitingRoom from './WaitingRoom';
import CreateAGame from './CreateAGame';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UsernamePage />} />
        <Route path="/username" element={<UsernamePage />} />
        <Route path="/explanation" element={<Explanation />} />
        <Route path="/explanation2" element={<Explanation2 />} />
        <Route path="/explanation3" element={<Explanation3 />} />
        <Route path="/explanation4" element={<Explanation4 />} />
        <Route path="/explanation5" element={<Explanation5 />} />
        <Route path="/explanation6" element={<Explanation6 />} />
        <Route path="/joingame" element={<JoinGame/>} />
        <Route path="/waitingroom" element={<WaitingRoom/>} />
        <Route path="/createagame" element={<CreateAGame/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
