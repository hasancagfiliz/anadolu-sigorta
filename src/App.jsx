import React from 'react';
//import { createTheme, ThemeProvider } from '@mui/material/styles';
import GenelBilgiler from './components/GenelBilgiler';
import AracBilgileri from './components/AracBilgileri';
import PoliceIslemleri from './components/PoliceIslemleri';
import OdemeBilgileri from './components/OdemeBilgileri';

function App() {
  return (
      <div>
        <GenelBilgiler />
        {/* <AracBilgileri />
        <PoliceIslemleri />
        <OdemeBilgileri /> */}
      </div>
  );
}

export default App;