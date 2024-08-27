import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Autocomplete, Button, Grid, FormControl, FormControlLabel, Checkbox, InputLabel, MenuItem, Select, Box, Container, TextField, Typography } from "@mui/material";
import anadoluSigorta from '../assets/images/anadolusigorta2.png';

const AracBilgileri  = () => {
    
    const navigate = useNavigate();

    const handleBackwardClick = () => {
        navigate('/1');
    }

    const handleForwardClick = () => {
        navigate('/3');
    }
    

    const [formData, setFormData] = useState({
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

    const isFormValid = () => {
        const { modelYili, marka, kullanimTipi, kullanimSekli, model, modelDetayi, motorNumarasi, sasiNumarasi, tescilTarihi, checkbox1, checkbox2 } = formData;
    
        // Check for required fields based on conditions
        return modelYili && marka && kullanimTipi && kullanimSekli && model && modelDetayi && motorNumarasi && sasiNumarasi && tescilTarihi && checkbox1 && checkbox2;
    };
    

    const currentYear = new Date().getFullYear();
    const years = Array.from(new Array(50), (val, index) => currentYear - index);

    const [lockedItems, setLockedItems] = useState([false, true, true, true, true, true]);

    const formatDate = (value) => {
        // Remove any non-digit characters
        const digits = value.replace(/\D/g, '');
        let formattedDate = '';
    
        // Add slashes after every 2 digits for day and month, and after 4 digits for year
        if (digits.length > 0) {
            formattedDate += digits.substring(0, 2); // Day
        }
        if (digits.length > 2) {
            formattedDate += '/' + digits.substring(2, 4); // Month
        }
        if (digits.length > 4) {
            formattedDate += '/' + digits.substring(4, 8); // Year (4 digits)
        }
    
        return formattedDate;
    };
    
    
    const handleDateChange = (event) => {
        const { name, value } = event.target;
    
        // Format the date input
        const formattedValue = name === 'tescilTarihi' ? formatDate(value) : value;
    
        setFormData({
            ...formData,
            [name]: formattedValue
        });
    };

    const handleCheckboxChange = (e) => {
        const { name, value, type, checked } = e.target;
        
        // Convert value to uppercase if the field is 'plakaNumarasi'
        const updatedValue = name === 'plakaNumarasi' ? value.toUpperCase() : value;
    
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : updatedValue
        });
    };
    
    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleChange = (event, value, index, field) => {
        const newValue = value || (event ? event.target.value : '');
        setFormData({
            ...formData,
            [field]: newValue
        });
    
        // Unlock the next item
        if (index < lockedItems.length - 1) {
            const newLockedItems = [...lockedItems];
            newLockedItems[index + 1] = false;
            setLockedItems(newLockedItems);
        }
    };
    

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    const options = [
        { label: 'Option 1', value: 1 },
        { label: 'Option 2', value: 2 },
        { label: 'Option 3', value: 3 },
    ];

    
    return (
        <Container 
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: "#fff",
            }}
        >

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
                        data-testid="NotesOutlinedIcon"
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
                    <line x1="255" y1="20" x2="440" y2="20" stroke="lightgray" strokeWidth="3" />
                    <line x1="440" y1="20" x2="625" y2="20" stroke="lightgray" strokeWidth="3" />

                    {/* First ring */}
                    <circle cx="70" cy="20" r="12" fill="#ffb94a" stroke="#ffb94a" strokeWidth="5" />
                    {/* Tick mark inside the first ring */}
                    <path d="M64,20 L68,25 L76,15" fill="none" stroke="#fff" strokeWidth="2.5"/>
                    {/* Second ring */}
                    <circle cx="255" cy="20" r="12" fill="white" stroke="#ffb94a" strokeWidth="5" />
                    {/* Third ring */}
                    <circle cx="440" cy="20" r="12" fill="white" stroke="lightgray" strokeWidth="3" />
                    {/* Fourth ring */}
                    <circle cx="625" cy="20" r="12" fill="white" stroke="lightgray" strokeWidth="3" />

                    <text x="70" y="60" textAnchor="middle" fill="black" fontSize="0.9rem" fontWeight="bold">Genel Bilgiler</text>
                    <text x="255" y="60" textAnchor="middle" fill="black" fontSize="0.9rem" fontWeight="bold">Araç Bilgileri</text>
                    <text x="440" y="60" textAnchor="middle" fill="black" fontSize="0.9rem"> Poliçe İşlemleri</text>
                    <text x="625" y="60" textAnchor="middle" fill="black" fontSize="0.9rem">Ödeme Bilgileri</text>
                    
                </svg>
            </Box>

            <Box 
                sx={{ 
                    height: '60vh',
                    width: '80vw',
                    border: 'solid',
                    borderColor: '#e2edfd',
                    borderWidth: '2px',
                    borderRadius: 4,
                    padding: 4,
                }}
            >
                
                <Box>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel id="year-select-label" shrink>Model Yılı</InputLabel>
                                <Select
                                value={formData.modelYili}
                                displayEmpty
                                labelId="year-select-label"
                                id="year-select"
                                name="modelYili"
                                onChange={(event) => handleChange(event, null, 0, 'modelYili')}
                                label="Model Yılı"
                                >
                                {years.map((year) => (
                                    <MenuItem key={year} value={year}>
                                    {year}
                                    </MenuItem>
                                ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Autocomplete
                                value={formData.marka}
                                onChange={(event, value) => handleChange(event, value, 1, 'marka')}
                                options={options}
                                getOptionLabel={(option) => option.label}
                                disabled={lockedItems[1]}
                                renderInput={(params) => (
                                    <TextField {...params} label="Marka" variant="outlined" InputLabelProps={{ shrink: true }} />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Autocomplete
                                value={formData.kullanimTipi}
                                onChange={(event, value) => handleChange(event, value, 2, 'kullanimTipi')}
                                options={options}
                                getOptionLabel={(option) => option.label}
                                disabled={lockedItems[2]}
                                renderInput={(params) => (
                                    <TextField {...params} label="Kullanım Tipi" variant="outlined" InputLabelProps={{ shrink: true }} />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Autocomplete
                                value={formData.kullanimSekli}
                                onChange={(event, value) => handleChange(event, value, 3, 'kullanimSekli')}
                                options={options}
                                getOptionLabel={(option) => option.label}
                                disabled={lockedItems[3]}
                                renderInput={(params) => (
                                    <TextField {...params} label="Kullanım Şekli" variant="outlined" InputLabelProps={{ shrink: true }}/>
                                )}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Autocomplete
                                value={formData.model}
                                onChange={(event, value) => handleChange(event, value, 4, 'model')}
                                options={options}
                                getOptionLabel={(option) => option.label}
                                disabled={lockedItems[4]}
                                renderInput={(params) => (
                                    <TextField {...params} label="Model" variant="outlined" InputLabelProps={{ shrink: true }} />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Autocomplete
                                value={formData.modelDetayi}
                                onChange={(event, value) => handleChange(event, value, 5, 'modelDetayi')}
                                options={options}
                                getOptionLabel={(option) => option.label}
                                disabled={lockedItems[5]}
                                renderInput={(params) => (
                                    <TextField {...params} label="Model Detayı" variant="outlined" InputLabelProps={{ shrink: true }}/>
                                )}
                            />
                        </Grid>
                    </Grid>
                </Box>

                <Box
                    sx={{ 
                        marginTop: '30px',
                        paddingTop: 3,
                        borderTop: 'solid',
                        borderColor: '#e2edfd',
                        height: '30px',}}
                >
                    
                    <Grid container spacing={2}>
                    
                        <Grid item xs={6} md={6}>
                            <TextField
                                fullWidth
                                id="motorNumarasi"
                                label="Motor Numarası"
                                variant="outlined"
                                name="motorNumarasi"
                                value={formData.motorNumarasi}
                                onChange={handleFormChange}
                                required
                                sx={{ mb: 1 }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <TextField
                                    fullWidth
                                    id="sasiNumarasi"
                                    label="Şasi Numarası"
                                    variant="outlined"
                                    name="sasiNumarasi"
                                    value={formData.sasiNumarasi}
                                    onChange={handleFormChange}
                                    required
                                    sx={{ mb: 1 }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                id="tescilTarihi"
                                label="Tescil Tarihi"
                                variant="outlined"
                                name="tescilTarihi"
                                value={formData.tescilTarihi}
                                onChange={handleDateChange}
                                required
                                sx={{ mb: 1 }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                    </Grid>

                </Box>
                <Box
                    sx={{
                        marginTop: '120px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        borderTop: 'solid',
                        borderColor: '#e2edfd',
                        
                    }}
                >
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={formData.checkbox1}
                                size="small"
                                onChange={handleCheckboxChange}
                                name="checkbox1"
                                color="primary"
                            />
                        }
                        label={
                            <Typography color='black' variant='body' fontSize='0.9rem'>
                                Karayolu Taşıma Kanunu kapsamında şehirler arası taşımacılık yapmaktayım.
                            </Typography>
                        }
                        sx={{ mt: 3 }}
                    />

                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={formData.checkbox2}
                                size="small"
                                onChange={handleCheckboxChange}
                                name="checkbox2"
                                color="primary"
                            />
                        }
                        label={
                            <Typography color='black' variant='body' fontSize='0.9rem'>
                                Aracımda hasar olmadığını beyan ve taahhüt ediyorum.
                            </Typography>
                        }
                        sx={{ mt: 3 }}
                        />
                </Box>

                


            </Box>

            <Box 
                    sx={{ 
                        mt: 5,
                        width: '42vw', 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        
                    }}
                >
                    <Button onClick={handleBackwardClick} variant="contained" size="large" sx={{ backgroundColor: '#018fec', width: '200px', borderRadius: '20px', fontFamily: 'Nunito Sans', textTransform: 'capitalize'}}>
                        Geri
                    </Button>
                
                    <Button disabled={!isFormValid()} onClick={handleForwardClick} variant="contained" size="large" sx={{ backgroundColor: '#018fec', width: '200px', borderRadius: '20px', fontFamily: 'Nunito Sans', textTransform: 'capitalize'}}>
                        Devam
                    </Button>
                </Box>

        </Container>


    );

};

export default AracBilgileri;