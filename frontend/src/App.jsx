import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GenelBilgiler from './components/GenelBilgiler';
import AracBilgileri from './components/AracBilgileri';
import PoliceIslemleri from './components/PoliceIslemleri';
import OdemeBilgileri from './components/OdemeBilgileri';

const App = () => {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<GenelBilgiler />} />
              <Route path="/1" element={<GenelBilgiler />} />
              <Route path="/2" element={<AracBilgileri />} />
              <Route path="/3" element={<PoliceIslemleri />} />
              <Route path="/4" element={<OdemeBilgileri />} />
          </Routes>
      </Router>
  );
};

export default App;