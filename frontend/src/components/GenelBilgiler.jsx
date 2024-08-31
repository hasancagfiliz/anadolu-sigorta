import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Grid, Box, MenuItem, InputLabel, Select, FormControl, FormControlLabel, Checkbox, Link, Typography, Autocomplete} from '@mui/material';
import anadoluSigorta from '../assets/images/anadolusigorta2.png';

const GenelBilgiler = ({ userFormData, setUserFormData }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/2');
    }
    

    const ilKodlari = [...Array(81).keys()].map(num => String(num + 1).padStart(2, '0'));

    const isFormValid = () => {
        const { tcKimlik, isim, soyisim, ePosta, cepTelefonu, islemTipi, ilKodu, plakaNumarasi, ruhsatKodu, ruhsatNumarasi, checkbox1, checkbox2 } = userFormData;
        if (userFormData.islemTipi === "option1") {
            return tcKimlik && isim && soyisim && ePosta && cepTelefonu && islemTipi && ilKodu && plakaNumarasi && ruhsatKodu && ruhsatNumarasi && checkbox1 && checkbox2;
        }
        if (userFormData.islemTipi === "option2") {
            return tcKimlik && isim && soyisim && ePosta && cepTelefonu && islemTipi && ilKodu && plakaNumarasi && checkbox1 && checkbox2;
        }
    };


    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        
        // Convert value to uppercase if the field is 'plakaNumarasi'
        const updatedValue = name === 'plakaNumarasi' ? value.toUpperCase() : value;
    
        setUserFormData({
            ...userFormData,
            [name]: type === 'checkbox' ? checked : updatedValue
        });
    };
    

    

    return (
        
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: "#fff"
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
                    <line x1="70" y1="20" x2="255" y2="20" stroke="lightgray" strokeWidth="3" />
                    <line x1="255" y1="20" x2="440" y2="20" stroke="lightgray" strokeWidth="3" />
                    <line x1="440" y1="20" x2="625" y2="20" stroke="lightgray" strokeWidth="3" />

                    {/* First ring */}
                    <circle cx="70" cy="20" r="12" fill="white" stroke="#ffb94a" strokeWidth="5" />
                    {/* Second ring */}
                    <circle cx="255" cy="20" r="12" fill="white" stroke="lightgray" strokeWidth="3" />
                    {/* Third ring */}
                    <circle cx="440" cy="20" r="12" fill="white" stroke="lightgray" strokeWidth="3" />
                    {/* Fourth ring */}
                    <circle cx="625" cy="20" r="12" fill="white" stroke="lightgray" strokeWidth="3" />

                    <text x="70" y="60" textAnchor="middle" fill="black" fontSize="0.9rem" fontWeight="bold">Genel Bilgiler</text>
                    <text x="255" y="60" textAnchor="middle" fill="black" fontSize="0.9rem">Araç Bilgileri</text>
                    <text x="440" y="60" textAnchor="middle" fill="black" fontSize="0.9rem"> Poliçe İşlemleri</text>
                    <text x="625" y="60" textAnchor="middle" fill="black" fontSize="0.9rem">Ödeme Bilgileri</text>
                    
                </svg>
            </Box>

            <Box
                component="form"
                sx={{
                    alignSelf: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    maxWidth: '1100px',
                    padding: 4.5,
                    borderRadius: 4,
                    backgroundColor: '#fff',
                    border: 'solid',
                    borderColor: '#e2edfd',
                    borderWidth: '2px'
                }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            id="tcKimlik"
                            label="TC Kimlik Numarası"
                            variant="outlined"
                            name="tcKimlik"
                            value={userFormData.tcKimlik}
                            onChange={handleChange}
                            required
                            inputProps={{ maxLength: 11 }}
                            sx={{ mb: 1 }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        
                        />
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <TextField
                            fullWidth
                            id="isim"
                            label="İsim"
                            variant="outlined"
                            name="isim"
                            value={userFormData.isim}
                            onChange={handleChange}
                            required
                            autoComplete="name"
                            sx={{ mb: 1 }}
                            InputLabelProps={{
                                shrink: true,  // This keeps the label static above the text field
                            }}
                            InputProps={{
                                placeholder: '', // Ensures no placeholder text appears
                            }}
                            error={!/^[a-zA-ZğüşöçİĞÜŞÖÇı\s]*$/.test(userFormData.isim)}
                            helperText={!/^[a-zA-ZğüşöçİĞÜŞÖÇı\s]*$/.test(userFormData.isim) ? 'İsim sadece harflerden oluşmalıdır.' : ''}
                        />
                    </Grid>


                    <Grid item xs={12} md={3}>
                        <TextField
                            fullWidth
                            id="soyisim"
                            label="Soyisim"
                            variant="outlined"
                            name="soyisim"
                            value={userFormData.soyisim}
                            onChange={handleChange}
                            required
                            sx={{ mb: 1 }}
                            InputLabelProps={{
                                shrink: true,  // This keeps the label static above the text field
                            }}
                            InputProps={{
                                placeholder: '', // Ensures no placeholder text appears
                            }}
                            error={!/^[a-zA-ZğüşöçİĞÜŞÖÇı\s]*$/.test(userFormData.soyisim)}  // Updated regex to include "ı"
                            helperText={!/^[a-zA-ZğüşöçİĞÜŞÖÇı\s]*$/.test(userFormData.soyisim) ? 'Soyisim sadece harflerden oluşmalıdır.' : ''}
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            id="ePosta"
                            label="E-Posta Adresi"
                            variant="outlined"
                            name="ePosta"
                            value={userFormData.ePosta}
                            onChange={handleChange}
                            required
                            type="email"
                            sx={{ mb: 1 }}
                            InputLabelProps={{
                                shrink: true,  // This keeps the label static above the text field
                            }}
                            error={userFormData.ePosta && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(userFormData.ePosta)}  // Validates only if ePosta is not empty
                            helperText={userFormData.ePosta && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(userFormData.ePosta) ? 'Geçerli bir e-posta adresi girin.' : ''}
                        />
                    </Grid>


                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            id="cepTelefonu"
                            label="Cep Telefonu"
                            variant="outlined"
                            name="cepTelefonu"
                            value={userFormData.cepTelefonu}
                            onChange={handleChange}
                            required
                            sx={{ mb: 1 }}
                            InputLabelProps={{
                                shrink: true,  // This keeps the label static above the text field
                            }}
                            inputProps={{ maxLength: 10 }}  // Limits the input to 10 digits
                            error={
                                userFormData.cepTelefonu &&
                                (
                                    /[^0-9]/.test(userFormData.cepTelefonu) ||
                                    (userFormData.cepTelefonu.length === 10 && userFormData.cepTelefonu.startsWith('0')) ||
                                    userFormData.cepTelefonu.length !== 10
                                )
                            }
                            helperText={
                                userFormData.cepTelefonu &&
                                (
                                    /[^0-9]/.test(userFormData.cepTelefonu) ? 'Lütfen sadece rakam giriniz.' :
                                    (userFormData.cepTelefonu.startsWith('0')) ? 'Cep telefonu 0 ile başlamamalıdır.' :
                                    userFormData.cepTelefonu.length !== 10 ? 'Cep telefonu 10 haneli olmalıdır.' :
                                    ''
                                )
                            }
                        />
                    </Grid>


                    <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                            <InputLabel id="islemTipi-label" shrink>İşlem Tipi</InputLabel>
                            <Select
                                labelId="islemTipi-label"
                                id="islemTipi"
                                label="İşlem Tipi"
                                name="islemTipi"
                                value={userFormData.islemTipi}
                                onChange={handleChange}
                                required
                                variant="outlined"
                                sx={{ mb: 1 }}
                                displayEmpty
                            >
                                <MenuItem value="option1">2. el araç satın aldım, trafik poliçesi yaptırmak istiyorum.</MenuItem>
                                <MenuItem value="option2">Trafik poliçemi yenilemek istiyorum.</MenuItem>

                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} md={3}>
                    <FormControl fullWidth>
                        <Autocomplete
                            labelId="ilKodu-label"
                            id="ilKodu"
                            options={ilKodlari}
                            value={userFormData.ilKodu}
                            onChange={(event, newValue) => {
                                setUserFormData({
                                    ...userFormData,
                                    ilKodu: newValue || ''
                                });
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="İl Kodu"
                                    placeholder="34"
                                    variant="outlined"
                                    required
                                    InputLabelProps={{ shrink: true }}  // Label stays on top
                                    sx={{ mb: 1 }}
                                />
                            )}
                        />
                    </FormControl>

                    </Grid>

                    <Grid item xs={12} md={3}>
                        <TextField
                            fullWidth
                            id="plakaNumarasi"
                            label="Plaka Numarası"
                            variant="outlined"
                            name="plakaNumarasi"
                            placeholder='ABC123'
                            value={userFormData.plakaNumarasi}
                            onChange={handleChange}
                            required
                            sx={{ mb: 1 }}
                            InputLabelProps={{
                                shrink: true
                            }}
                            error={
                                userFormData.plakaNumarasi &&
                                (!/^[A-Z]{0,3}[0-9]{0,4}$/.test(userFormData.plakaNumarasi) || /[çÇşŞğĞüÜöÖıİ]/.test(userFormData.plakaNumarasi))  // Validates format and rejects Turkish characters
                            }
                            helperText={
                                userFormData.plakaNumarasi &&
                                /[çÇşŞğĞüÜöÖıİ]/.test(userFormData.plakaNumarasi) ? 'Türkçe karakter kullanmayınız.' :
                                !/^[A-Z]{0,3}[0-9]{0,4}$/.test(userFormData.plakaNumarasi) ? 'Format ABC123 şeklinde olmalıdır.' : ''
                            }
                        />
                    </Grid>

                    {/* Display additional fields conditionally */}
                    {userFormData.islemTipi === "option1" && (
                        <>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    id="ruhsatKodu"
                                    label="Ruhsat Kodu"
                                    variant="outlined"
                                    name="ruhsatKodu"
                                    value={userFormData.ruhsatKodu}
                                    onChange={handleChange}
                                    required
                                    sx={{ mb: 1 }}
                                    InputLabelProps={{ shrink: true }}
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    id="ruhsatNumarasi"
                                    label="Ruhsat Numarası"
                                    variant="outlined"
                                    name="ruhsatNumarasi"
                                    value={userFormData.ruhsatNumarasi}
                                    onChange={handleChange}
                                    required
                                    sx={{ mb: 1 }}
                                    InputLabelProps={{ shrink: true }}
                                />
                            </Grid>
                        </>
                    )}
                </Grid>

                {/* Checkboxes with labels */}
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={userFormData.checkbox1}
                            size="small"
                            onChange={handleChange}
                            name="checkbox1"
                            color="primary"
                        />
                    }
                    label={
                        <Typography color='black' variant='body' fontSize='1rem'>
                            Teklif ve poliçe işlemlerinin yürütülmesi amacıyla işlenen kişisel verilere ilişkin{" "}
                            <Link href="https://www.anadolusigorta.com.tr/yasal-bilgilendirme/kvkk-kapsaminda-bilgilendirme" target="_blank" rel="noopener noreferrer" sx={{ textDecoration: 'none',}}>
                                aydınlatma metnini
                            </Link> 
                            {" "}okudum.
                        </Typography>
                    }
                    sx={{ mt: 2 }}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={userFormData.checkbox2}
                            size="small"
                            onChange={handleChange}
                            name="checkbox2"
                            color="primary"
                        />
                    }
                    label={
                        <Typography color='black' variant='body' fontSize='1rem'>
                            Ürün, hizmet, kampanya ve anketler hakkında tarafımla ticari elektronik ileti gönderilmesi ve pazarlama amacıyla iletişime geçilmesine{" "}
                            <Link href="https://firebasestorage.googleapis.com/v0/b/sigortam-cepte-v2.appspot.com/o/static%2FTicari_Elektronik_Ileti_Aydinlatma_Metni.pdf?alt=media&token=a0211957-332a-4cdc-b665-0957a4c6dc06" target="_blank" rel="noopener noreferrer" sx={{ textDecoration: 'none',}}>
                                belirtilen esaslar
                            </Link>
                            {" "}çerçevesinde onay veriyorum.
                        </Typography>
                    }
                    sx={{ mt: 3 }}
                />
            </Box>

            <Box 
                sx={{ 
                    mt: 5,
                    width: '42vw', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                }}
            >
                <Button variant="contained" size="large" sx={{ backgroundColor: '#018fec', width: '200px', borderRadius: '20px', fontFamily: 'Nunito Sans', textTransform: 'capitalize'}}>
                    Geri
                </Button>
            
                <Button disabled={!isFormValid()} onClick={handleClick} variant="contained" size="large" sx={{ backgroundColor: '#018fec', width: '200px', borderRadius: '20px', fontFamily: 'Nunito Sans', textTransform: 'capitalize'}}>
                    Devam
                </Button>
            </Box>

        </Container>
    );
};

export default GenelBilgiler;