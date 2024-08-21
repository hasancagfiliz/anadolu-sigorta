import React, { useState } from 'react';
import { TextField, Button, Container, Grid, Box, MenuItem, InputLabel, Select, FormControl, FormControlLabel, Checkbox, Link, Typography, Autocomplete } from '@mui/material';

const UserForm = () => {
    const [formData, setFormData] = useState({
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

    const ilKodlari = [...Array(81).keys()].map(num => String(num + 1).padStart(2, '0'));

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send formData to the backend
        fetch('http://localhost:5000/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                // Handle success
            })
            .catch((error) => {
                console.error('Error:', error);
                // Handle error
            });
    };

    return (
        <Container
            maxWidth="false"
            sx={{
                height: '100vh',
                width: '100vw',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: "#1af"
            }}
        >
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    alignSelf: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    maxWidth: '1100px',
                    padding: 3,
                    borderRadius: 2,
                    backgroundColor: '#fff',
                    boxShadow: 3,
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
                            value={formData.tcKimlik}
                            onChange={handleChange}
                            required
                            sx={{ mb: 1 }}
                        />
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <TextField
                            fullWidth
                            id="isim"
                            label="İsim"
                            variant="outlined"
                            name="isim"
                            value={formData.isim}
                            onChange={handleChange}
                            required
                            sx={{ mb: 1 }}
                        />
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <TextField
                            fullWidth
                            id="soyisim"
                            label="Soyisim"
                            variant="outlined"
                            name="soyisim"
                            value={formData.soyisim}
                            onChange={handleChange}
                            required
                            sx={{ mb: 1 }}
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            id="ePosta"
                            label="E-Posta Adresi"
                            variant="outlined"
                            name="ePosta"
                            value={formData.ePosta}
                            onChange={handleChange}
                            required
                            type="email"
                            sx={{ mb: 1 }}
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            id="cepTelefonu"
                            label="Cep Telefonu"
                            variant="outlined"
                            name="cepTelefonu"
                            value={formData.cepTelefonu}
                            onChange={handleChange}
                            required
                            type="tel"
                            sx={{ mb: 1 }}
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                            <InputLabel id="islemTipi-label">İşlem Tipi</InputLabel>
                            <Select
                                labelId="islemTipi-label"
                                id="islemTipi"
                                label="İşlem Tipi"
                                name="islemTipi"
                                value={formData.islemTipi}
                                onChange={handleChange}
                                required
                                variant="outlined"
                                sx={{ mb: 1 }}
                            >
                                <MenuItem value="option1">2. el araç satın aldım, trafik poliçesi yaptırmak istiyorum.</MenuItem>
                                <MenuItem value="option2">Trafik poliçemi yenilemek istiyorum.</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <FormControl fullWidth>
                            <Autocomplete
                                id="ilKodu"
                                options={ilKodlari}
                                value={formData.ilKodu}
                                onChange={(event, newValue) => {
                                    setFormData({
                                        ...formData,
                                        ilKodu: newValue || ''
                                    });
                                }}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="İl Kodu"
                                        variant="outlined"
                                        required
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
                            value={formData.plakaNumarasi}
                            onChange={handleChange}
                            required
                            sx={{ mb: 1 }}
                        />
                    </Grid>

                    {/* Display additional fields conditionally */}
                    {formData.islemTipi === "option1" && (
                        <>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    id="ruhsatKodu"
                                    label="Ruhsat Kodu"
                                    variant="outlined"
                                    name="ruhsatKodu"
                                    value={formData.ruhsatKodu}
                                    onChange={handleChange}
                                    required
                                    sx={{ mb: 1 }}
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    id="ruhsatNumarasi"
                                    label="Ruhsat Numarası"
                                    variant="outlined"
                                    name="ruhsatNumarasi"
                                    value={formData.ruhsatNumarasi}
                                    onChange={handleChange}
                                    required
                                    sx={{ mb: 1 }}
                                />
                            </Grid>
                        </>
                    )}
                </Grid>

                {/* Checkboxes with labels */}
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={formData.checkbox1}
                            size="small"
                            onChange={handleChange}
                            name="checkbox1"
                            color="primary"
                        />
                    }
                    label={
                        <Typography>
                            Teklif ve poliçe işlemlerinin yürütülmesi amacıyla işlenen kişisel verilere ilişkin{" "}
                            <Link href="https://www.anadolusigorta.com.tr/yasal-bilgilendirme/kvkk-kapsaminda-bilgilendirme" target="_blank" rel="noopener noreferrer">
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
                            checked={formData.checkbox2}
                            size="small"
                            onChange={handleChange}
                            name="checkbox2"
                            color="primary"
                        />
                    }
                    label={
                        <Typography>
                            Ürün, hizmet, kampanya ve anketler hakkında tarafımla ticari elektronik ileti gönderilmesi ve pazarlama amacıyla iletişime geçilmesine{" "}
                            <Link href="https://firebasestorage.googleapis.com/v0/b/sigortam-cepte-v2.appspot.com/o/static%2FTicari_Elektronik_Ileti_Aydinlatma_Metni.pdf?alt=media&token=a0211957-332a-4cdc-b665-0957a4c6dc06" target="_blank" rel="noopener noreferrer">
                                belirtilen esaslar
                            </Link>
                            {" "}çerçevesinde onay veriyorum.
                        </Typography>
                    }
                    sx={{ mt: 1 }}
                />

                <Button type="submit" variant="contained" color="primary" sx={{ mt: 3, width: '30%' }}>
                    Gönder
                </Button>
            </Box>
        </Container>
    );
};

export default UserForm;