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

    const [aracFormData, setAracFormData] = useState({
        modelYili: '',
        marka: '',
        kullanimTipi: '',
        kullanimSekli: '',
        model: '',
        modelDetayi: '',
        motorNumarasi: '',
        sasiNumarasi: '',
        tescilTarihi: '',
        checkbox1: false,
        checkbox2: false,
    });

    const [polFormData, setPolFormData] = useState({
        radioSelection: '',
        polID: '',
    });

    const [odemeFormData, setOdemeFormData] = useState({
        isim: '',
        soyisim: '',
        kartnumarasi: '',
        expiry: '',
        cvc: '',
        odemeTipi: '',
        checkbox1: '',
        checkbox2: '',
        checkbox3: '',
    });


  return (
      <Router>
          <Routes>
              <Route path="/" element={<GenelBilgiler userFormData={userFormData} setUserFormData={setUserFormData} />} />
              <Route path="/1" element={<GenelBilgiler userFormData={userFormData} setUserFormData={setUserFormData} />} />
              <Route path="/2" element={<AracBilgileri aracFormData={aracFormData} setAracFormData={setAracFormData} />} />
              <Route path="/3" element={<PoliceIslemleri polFormData={polFormData} setPolFormData={setPolFormData} />} />
              <Route path="/4" element={<OdemeBilgileri odemeFormData={odemeFormData} setOdemeFormData={setOdemeFormData} userFormData={userFormData} polFormData={polFormData} />} />
          </Routes>
      </Router>
  );
};

export default App;