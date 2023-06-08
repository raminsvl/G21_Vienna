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
import SingleOrMultiPlayer from './js/SingleOrMultiPlayer';
import Multiplayer from './js/Multiplayer';

import CustomPage from './js/CustomPage';
import YouChoseSkrik from './js/YouChoseSkrik';
import YouChoseMadonna from './js/YouChoseMadonna';
import Game1Madonna from './js/Game1madonna';
import YouChoseVampyr from './js/YouChoseVampyr';
import Game1Vampyr from './js/Game1vampyr';
import Game1Skrik from './js/Game1skrik';
import Game1selvportrett from './js/Game1selvportrett';
import ChooseArt from './js/ChooseArt';
import YouChoseSelvportrett from './js/YouChoseSelvportrett';
import Difficulty from './js/difficulty';




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
        <Route path="/singleormultiplayer" element={<SingleOrMultiPlayer/>} />
        <Route path="/multiplayer" element={<Multiplayer/>} />
        
        <Route path="/custompage" element={<CustomPage />} />
        <Route path="/chooseart" element={<ChooseArt />} />
        <Route path="/you-chose-selvportrett" element={<YouChoseSelvportrett />} />
        <Route path="/you-chose-selvportrett/selvportrett" element={<Game1selvportrett />} />
        <Route path="/you-chose-skrik" element={<YouChoseSkrik />} />
        <Route path="/you-chose-madonna" element={<YouChoseMadonna />} />
        <Route path="/you-chose-vampyr" element={<YouChoseVampyr />} />
        <Route path="/you-chose-skrik/skrik" element={<Game1Skrik />} />
        <Route path="/you-chose-madonna/madonna" element={<Game1Madonna />} />
        <Route path="/you-chose-vampyr/vampyr" element={<Game1Vampyr />} />
        <Route path="/difficulty" element={<Difficulty />} />
      </Routes>
    </Router>
  );
}

export default App;
