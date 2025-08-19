import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './styles/App.scss';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import RadioPlayer from './components/RadioPlayer';
import NaamGroup from '../src/Pages/NaaM Groups';

// Wrapper component to control when Body & RadioPlayer appear
const MainContent = () => {
  const location = useLocation();

  // If current path is '/naam-group', don't show Body and RadioPlayer
  const isNaamGroup = location.pathname === '/naam-group';

  return (
    <>
      {!isNaamGroup && (
        <>
          <Body />
          <RadioPlayer />
        </>
      )}
      <Routes>
        <Route path="/naam-group" element={<NaamGroup />} />
        {/* Add more routes here */}
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
