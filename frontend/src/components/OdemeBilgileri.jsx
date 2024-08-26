import React, { useState } from 'react';
import { TextField, Button, Container, Grid, Box, MenuItem, InputLabel, Select, FormControl, FormControlLabel, Checkbox, Link, Typography } from '@mui/material';
import anadoluSigorta from '../assets/images/anadolusigorta2.png';
import { useNavigate } from 'react-router-dom';

const OdemeBilgileri = () => {
    const [formData, setFormData] = useState({
        isim: '',
        soyisim: '',
        kartnumarasi: '',
        expiry: '',
        odemeTipi: '',
        checkbox1: '',
        checkbox2: '',
        checkbox3: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
    
        if (name === 'expiry') {
            // Remove non-digit characters
            let numericValue = value.replace(/\D/g, '');
    
            // Format the value as MM/YY
            let formattedValue = '';
            if (numericValue.length > 2) {
                formattedValue = numericValue.slice(0, 2) + '/' + numericValue.slice(2, 4);
            } else {
                formattedValue = numericValue;
            }
    
            setFormData({
                ...formData,
                [name]: formattedValue
            });
        } else if (name === 'kartnumarasi') {
            // Remove non-digit characters
            let numericValue = value.replace(/\D/g, '');
    
            // Format the value based on length
            let formattedValue = '';
            if (numericValue.length === 16) {
                formattedValue = numericValue.slice(0, 4) + '-' + numericValue.slice(4, 8) + '-' + numericValue.slice(8, 12) + '-' + numericValue.slice(12, 16);
            } else if (numericValue.length === 15) {
                formattedValue = numericValue.slice(0, 4) + '-' + numericValue.slice(4, 10) + '-' + numericValue.slice(10, 15);
            } else {
                formattedValue = numericValue;
            }
    
            setFormData({
                ...formData,
                [name]: formattedValue
            });
        } else {
            setFormData({
                ...formData,
                [name]: type === 'checkbox' ? checked : value
            });
        }
    };
    
    

    const isFormValid = () => {
        const { isim, soyisim, kartnumarasi, expiry, odemeTipi, checkbox1, checkbox2 } = formData;
        return isim && soyisim && kartnumarasi && expiry && odemeTipi && checkbox1 && checkbox2;
    };

    const navigate = useNavigate();

    const handleBackwardClick = () => {
        navigate('/3');
    }

    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: "#fff"
            }}
        >
            {/* Header */}
            <Box
                width="99vw"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                height="50px"
                borderBottom="solid #f5f5f5"
            >
                <Box display="flex" alignItems="center">
                    <svg
                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium header__menu_icon css-1546r62"
                        cursor="pointer"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        style={{ width: '30px', height: '30px', fill: 'grey', marginRight: '15', marginLeft: '3vw' }}
                    >
                        <path d="M21 11.01 3 11v2h18zM3 16h12v2H3zM21 6H3v2.01L21 8z"></path>
                    </svg>

                    <img 
                        src={anadoluSigorta} 
                        alt="Anadolu Sigorta logo"
                        style={{ width: 'auto', height: '30px' }}
                    />
                </Box>

                <Box>
                    <Typography 
                        variant="body" 
                        sx={{ fontWeight: 'bold', color: '#018fec', fontSize: '0.9rem', cursor: 'pointer' }} 
                        marginRight={'3vw'}
                    >
                        Giriş Yap
                    </Typography>
                </Box>
            </Box>
            
            {/* Sub-header */}
            <Box
                height="48px"
                width="99vw"
                backgroundColor="rgba(248, 252, 254, .9)"
                alignItems="center"
                display="flex"
                justifyContent={'center'}
            >
                <Typography variant="body" color="#018fec" fontWeight="bold" fontSize="0.9rem">
                    Trafik Sigortası
                </Typography>
            </Box>

            {/* Progress Bar */}
            <Box
                width="99vw"
                display="flex"
                justifyContent="center"
                alignItems="center"
                //p={1}
                sx={{ position: 'relative', width: '100%', height: '100px' }}
            >
                <svg
                    width="700"
                    height="70"
                    viewBox="0 0 700 70"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Lines connecting rings */}
                    <line x1="70" y1="20" x2="255" y2="20" stroke="#ffb94a" strokeWidth="4" />
                    <line x1="255" y1="20" x2="440" y2="20" stroke="#ffb94a" strokeWidth="4" />
                    <line x1="440" y1="20" x2="625" y2="20" stroke="#ffb94a" strokeWidth="4" />

                    {/* First ring */}
                    <circle cx="70" cy="20" r="12" fill="#ffb94a" stroke="#ffb94a" strokeWidth="5" />
                    {/* Tick mark inside the first ring */}
                    <path d="M64,20 L68,25 L76,15" fill="none" stroke="#fff" strokeWidth="2.5" />

                    {/* Second ring */}
                    <circle cx="255" cy="20" r="12" fill="#ffb94a" stroke="#ffb94a" strokeWidth="5" />
                    <path d="M249,20 L253,25 L261,15" fill="none" stroke="#fff" strokeWidth="2.5" />
                    
                    {/* Third ring */}
                    <circle cx="440" cy="20" r="12" fill="#ffb94a" stroke="#ffb94a" strokeWidth="5" />
                    <path d="M434,20 L438,25 L446,15" fill="none" stroke="#fff" strokeWidth="2.5" />

                    {/* Fourth ring */}
                    <circle cx="625" cy="20" r="12" fill="white" stroke="#ffb94a" strokeWidth="5" />

                    {/* Text labels */}
                    <text x="70" y="60" textAnchor="middle" fill="black" fontSize="0.9rem" fontWeight="bold">Genel Bilgiler</text>
                    <text x="255" y="60" textAnchor="middle" fill="black" fontSize="0.9rem" fontWeight="bold">Araç Bilgileri</text>
                    <text x="440" y="60" textAnchor="middle" fill="black" fontSize="0.9rem" fontWeight="bold">Poliçe İşlemleri</text>
                    <text x="625" y="60" textAnchor="middle" fill="black" fontSize="0.9rem" fontWeight="bold">Ödeme Bilgileri</text>
                </svg>

            </Box>

            {/* Offer Details */}
            <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                sx={{
                  height: '50px',
                  width: '80vw',
                  border: 'solid',
                  borderColor: '#e2edfd',
                  borderRadius: '15px',
                  borderWidth: '2px',
                  fontSize: '1.1rem',
                  marginBottom: '10px',
                  backgroundColor: 'rgba(230, 240, 255, .127)',
                }}
            >
                <Typography color="rgb(26, 125, 189)" marginLeft={8} variant="body" fontWeight="bold">
                    Teklif No: 0683119321
                </Typography>

                <Typography color="rgb(26, 125, 189)" marginRight={8} variant="body" fontWeight="bold">
                    Size Özel Tutar: 12482 TL
                </Typography>

            </Box>
            
            <Box sx={{ width: '90vw', justifyContent: 'center', display:'flex', marginTop: '5px'}}>
                
                {/* Form Section */}
                <Box
                    padding={3}
                    sx={{
                        border: 'solid',
                        borderColor: '#e2edfd',
                        borderRadius: '15px',
                        borderWidth: '2px',
                        width: '42vw',
                        height: '250px'
                    }}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <TextField 
                                fullWidth
                                id="isim"
                                label="İsim"
                                variant="outlined"
                                name="isim"
                                value={formData.isim}
                                onChange={handleChange}
                                required
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                error={!/^[a-zA-ZğüşöçİĞÜŞÖÇı\s]*$/.test(formData.isim)}  // Updated regex to include "ı"
                                helperText={!/^[a-zA-ZğüşöçİĞÜŞÖÇı\s]*$/.test(formData.isim) ? 'İsim sadece harflerden oluşmalıdır.' : ''}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                id="soyisim"
                                label="Soyisim"
                                variant="outlined"
                                name="soyisim"
                                value={formData.soyisim}
                                onChange={handleChange}
                                required
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                error={!/^[a-zA-ZğüşöçİĞÜŞÖÇı\s]*$/.test(formData.soyisim)}  // Updated regex to include "ı"
                                helperText={!/^[a-zA-ZğüşöçİĞÜŞÖÇı\s]*$/.test(formData.soyisim) ? 'İsim sadece harflerden oluşmalıdır.' : ''}
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField
                                fullWidth
                                id="kartnumarasi"
                                label="Kart Numarası"
                                variant="outlined"
                                name="kartnumarasi"
                                value={formData.kartnumarasi}
                                onChange={handleChange}
                                required
                                inputProps={{ maxLength: 19,}}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        

                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                id="expiry"
                                label="AA/YY"
                                variant="outlined"
                                name="expiry"
                                value={formData.expiry}
                                onChange={handleChange}
                                required
                                inputProps={{ maxLength: 5,}}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <FormControl fullWidth required>
                                <InputLabel id="odemeTipi-label" shrink>Ödeme Tipi</InputLabel>
                                <Select
                                    labelId="odemeTipi-label"
                                    label="odemeTipi"
                                    name="odemeTipi"
                                    value={formData.odemeTipi}
                                    onChange={handleChange}
                                    displayEmpty
                                >
                                    <MenuItem value="kredi">Kredi Kartı</MenuItem>
                                    <MenuItem value="nakit">Nakit</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>

                    <Box 
                        sx={{ 
                            mt: 14,
                            width: '38vw', 
                            display: 'flex', 
                            justifyContent: 'space-between', 
                        }}
                    >
                        <Button onClick={handleBackwardClick} variant="contained" size="large" sx={{ backgroundColor: '#018fec', width: '200px', borderRadius: '20px', fontFamily: 'Nunito Sans', textTransform: 'capitalize'}}>
                            Geri
                        </Button>
                    
                        <Button disabled={!isFormValid()} variant="contained" size="large" sx={{ backgroundColor: '#018fec', width: '200px', borderRadius: '20px', fontFamily: 'Nunito Sans', textTransform: 'capitalize'}}>
                            Ödeme Yap
                        </Button>
                    </Box>
                </Box>
                    
                    
                <Box sx={{ marginLeft: '20px', }}>
                    {/* Card Image and Number Overlay */}
                    <Box
                        sx={{
                            width: '30vw',
                            height: '220px',
                            backgroundImage: 'url(/src/assets/images/credit-card-empty.png)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            mt: 3,
                            margin: '0 auto', // Center the card image horizontally
                            position: 'relative', // Ensure the overlay text positions correctly
                            border: 'solid',
                            borderWidth: '2px',
                            borderRadius: '15px',
                            borderColor: '#e2edfd',
                        }}
                    >
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '60%',
                                left: '10%',
                                fontSize: '1.5rem',
                                fontFamily: 'monospace',
                                letterSpacing: '0.1rem',
                            }}
                        >
                            {formData.kartnumarasi}
                        </Box>
                    </Box>

                    <Box 
                        mt={2}
                        p={2}
                        sx={{
                            border: 'solid',
                            borderColor: '#e2edfd',
                            borderRadius: '15px',
                            borderWidth: '2px',
                            width: '30vw',
                        }}
                    >
                        <FormControlLabel
                            control={<Checkbox checked={formData.checkbox1} name="checkbox1" onChange={handleChange} size="small"/>}
                            label={
                                <span>
                                    <Link href="#">Bilgilendirme Formunu</Link> okudum, onaylıyorum.
                                </span>
                            }
                            sx={{ marginBottom: '16px' }}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={formData.checkbox2} name="checkbox2" onChange={handleChange} size="small"/>}
                            label={
                                <span>
                                    <Link href="#">Mesafeli Satış Sözleşmesini</Link> okudum, onaylıyorum.
                                </span>
                            }
                            sx={{ marginBottom: '16px' }} 
                        />
                        <FormControlLabel
                            control={<Checkbox checked={formData.checkbox3} name="checkbox3" onChange={handleChange} size="small"/>}
                            label={
                                <span>
                                    Kredi Kartı bilgilerimin sonraki işlemlerim için kullanılması amacıyla{' '}
                                    <Link href="#">bilgilendirme metni</Link> kapsamında saklanmasını kabul ediyorum.
                                </span>
                            }
                        />
                    </Box>
                </Box>
            </Box>
        
        </Container>
    );
};

export default OdemeBilgileri;
