import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UsernamePage from './js/UsernamePage';
import Explanation from './js/Explanation';
import Explanation2 from './js/Explanation2'; 
import Explanation3 from './js/Explanation3'; 
import Explanation4 from './js/Explanation4'; 
import Explanation5 from './js/Explanation5'; 
import Explanation6 from './js/Explanation6'; 
import JoinGame from './js/JoinGame';
import WaitingRoom from './js/WaitingRoom';
import CreateAGame from './js/CreateAGame';
import Intro from './js/Intro';
import Mode from './js/Mode';
import Multiplayer from './js/Multiplayer';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Intro/>} />
        <Route path="/usernamepage" element={<UsernamePage />} />
        <Route path="/explanation" element={<Explanation />} />
        <Route path="/explanation2" element={<Explanation2 />} />
        <Route path="/explanation3" element={<Explanation3 />} />
        <Route path="/explanation4" element={<Explanation4 />} />
        <Route path="/explanation5" element={<Explanation5 />} />
        <Route path="/explanation6" element={<Explanation6 />} />
        <Route path="/joingame" element={<JoinGame/>} />
        <Route path="/waitingroom" element={<WaitingRoom/>} />
        <Route path="/createagame" element={<CreateAGame/>} />
        <Route path="/mode" element={<Mode/>} />
        <Route path="/multiplayer" element={<Multiplayer/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
