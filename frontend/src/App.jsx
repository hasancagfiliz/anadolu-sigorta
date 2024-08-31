import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GenelBilgiler from './components/GenelBilgiler';
import AracBilgileri from './components/AracBilgileri';
import PoliceIslemleri from './components/PoliceIslemleri';
import OdemeBilgileri from './components/OdemeBilgileri';

const App = () => {

    const [userFormData, setUserFormData] = useState({
        tcKimlik: '',
        isim: '',
        soyisim: '',
        ePosta: '',
        cepTelefonu: '',
        islemTipi: '',
        ilKodu: '',
        plakaNumarasi: '',
        ruhsatKodu: '',
        ruhsatNumarasi: '',
        checkbox1: false,
        checkbox2: false,
    });


  return (
      <Router>
          <Routes>
              <Route path="/" element={<GenelBilgiler userFormData={userFormData} setUserFormData={setUserFormData} />} />
              <Route path="/1" element={<GenelBilgiler userFormData={userFormData} setUserFormData={setUserFormData} />} />
              <Route path="/2" element={<AracBilgileri />} />
              <Route path="/3" element={<PoliceIslemleri />} />
              <Route path="/4" element={<OdemeBilgileri />} />
          </Routes>
      </Router>
  );
};

export default App;