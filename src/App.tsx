import React from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';

import WeakerPlayer from './screens/WeakerPlayer';
import NormalPlayer from './screens/NormalPlayer';
import ExcellentPlayer from './screens/ExcellentPlayer';
import PerfectPlayer from './screens/PerfectPlayer';
import './App.css';
import YoungPlayer from "./screens/YoungPlayer";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
      <Link to="/weaker"><button className="styled-button">Generate Weaker Players</button></Link>
      <Link to="/normal"><button className="styled-button">Generate Normal Players</button></Link>
      <Link to="/excellent"><button className="styled-button">Generate Excellent Players</button></Link>
      <Link to="/perfect"><button className="styled-button">Generate Perfect Team</button></Link>
      <Link to="/younger"><button className="styled-button">Generate Younger Team</button></Link>


        <Routes>
          <Route path="/weaker" element={<WeakerPlayer />} />
          <Route path="/normal" element={<NormalPlayer />} />
          <Route path="/excellent" element={<ExcellentPlayer />} />
          <Route path="/perfect" element={<PerfectPlayer />} />
          <Route path="/younger" element={<YoungPlayer />} />
          <Route path="/" element={<h1>Welcome! Select a player level to view</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
