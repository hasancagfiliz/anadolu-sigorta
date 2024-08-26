import React from 'react';
import { Container, Box, Typography, Button, Radio, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import anadoluSigorta from '../assets/images/anadolusigorta2.png';
import { useNavigate } from 'react-router-dom';

const data = [
    { label: 'Maddi Hasar', base: '400000.0', extra: '400000.0' },
    { label: 'Ölüm ve Sürekli Sakatlık', base: '9000000.0', extra: '9000000.0' },
    { label: 'Sağlık Giderleri', base: '9000000.0', extra: '9000000.0' },
    { label: 'Artan Mali Sorumluluk', base: '20000.0', extra: '40000.0' },
    { label: 'Koltuk Ferdi Kaza', base: '-', extra: '20000.0' },
    { label: 'Anadolu Hizmet Trafik', base: '-', extra: '-' },
    { label: 'Hasarsızlık İndirimi', base: '%5.0', extra: '%5.0' },
];




const InsuranceTable = () => {
    const [selectedValue, setSelectedValue] = React.useState('base');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <Box sx={{ p: 0 }} width="55vw">
            <TableContainer component={Paper} sx={{ borderRadius: 4 }}>
                <Table aria-label="insurance comparison table" sx={{ backgroundColor: 'rgba(251,251,252,255)' }}>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ padding: '4px 16px', height: '30px' }}></TableCell>
                            <TableCell align="center" sx={{ padding: '4px 8px', height: '30px' }}>TRAFİK BAŞLANGIÇ</TableCell>
                            <TableCell align="center" sx={{ padding: '4px 8px', height: '30px' }}>TRAFİK EKSTRA</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row, rowIndex) => (
                            <TableRow key={row.label}>
                                <TableCell
                                    component="th"
                                    scope="row"
                                    sx={{ fontWeight: 'bold', padding: '4px 30px', height: '30px' }}
                                >
                                    {row.label}
                                </TableCell>
                                <TableCell
                                    align="center"
                                    sx={{
                                        padding: '4px 8px',
                                        height: '30px',
                                        borderLeft: selectedValue === 'base' ? '2px solid #018fec' : '1px solid #e0e0e0',
                                        borderRight: selectedValue === 'base' ? '2px solid #018fec' : '1px solid #e0e0e0',
                                        borderTop: rowIndex === 0 && selectedValue === 'base' ? '2px solid #018fec' : '1px solid #e0e0e0',
                                        borderBottom: rowIndex === data.length - 1 && selectedValue === 'base' ? '2px solid #018fec' : '1px solid #e0e0e0',
                                    }}
                                >
                                    {row.base}
                                </TableCell>
                                <TableCell
                                    align="center"
                                    sx={{
                                        padding: '4px 8px',
                                        height: '30px',
                                        borderLeft: selectedValue === 'extra' ? '2px solid #018fec' : '1px solid #e0e0e0',
                                        borderRight: selectedValue === 'extra' ? '2px solid #018fec' : '1px solid #e0e0e0',
                                        borderTop: rowIndex === 0 && selectedValue === 'extra' ? '2px solid #018fec' : '1px solid #e0e0e0',
                                        borderBottom: rowIndex === data.length - 1 && selectedValue === 'extra' ? '2px solid #018fec' : '1px solid #e0e0e0',
                                    }}
                                >
                                    {row.extra}
                                </TableCell>
                            </TableRow>
                        ))}
                        <TableRow>
                            <TableCell sx={{ padding: '4px 16px', height: '30px' }} /> {/* Increased left padding */}
                            <TableCell
                                align="center"
                                sx={{
                                    padding: '4px 8px',
                                    height: '30px',
                                    borderLeft: selectedValue === 'base' ? '2px solid #018fec' : '1px solid #e0e0e0',
                                    borderRight: selectedValue === 'base' ? '2px solid #018fec' : '1px solid #e0e0e0',
                                    borderBottom: selectedValue === 'base' ? '2px solid #018fec' : '1px solid #e0e0e0',
                                }}
                            >
                                <Radio
                                    checked={selectedValue === 'base'}
                                    onChange={handleChange}
                                    value="base"
                                    name="insurance-option"
                                    inputProps={{ 'aria-label': 'base' }}
                                />
                                12482 TL
                            </TableCell>
                            <TableCell
                                align="center"
                                sx={{
                                    padding: '4px 8px',
                                    height: '30px',
                                    borderLeft: selectedValue === 'extra' ? '2px solid #018fec' : '1px solid #e0e0e0',
                                    borderRight: selectedValue === 'extra' ? '2px solid #018fec' : '1px solid #e0e0e0',
                                    borderBottom: selectedValue === 'extra' ? '2px solid #018fec' : '1px solid #e0e0e0',
                                }}
                            >
                                <Radio
                                    checked={selectedValue === 'extra'}
                                    onChange={handleChange}
                                    value="extra"
                                    name="insurance-option"
                                    inputProps={{ 'aria-label': 'extra' }}
                                />
                                15122 TL
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>

    );
};

const PoliceIslemleri = () => {
    
    const navigate = useNavigate();
    
    const handleForwardClick = () => {
        navigate('/4');
    }
    
    const handleBackwardClick = () => {
        navigate('/2');
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
                    <line x1="255" y1="20" x2="440" y2="20" stroke="#ffb94a" strokeWidth="4" />
                    <line x1="440" y1="20" x2="625" y2="20" stroke="lightgray" strokeWidth="3" />

                    {/* First ring */}
                    <circle cx="70" cy="20" r="12" fill="#ffb94a" stroke="#ffb94a" strokeWidth="5" />
                    {/* Tick mark inside the first ring */}
                    <path d="M64,20 L68,25 L76,15" fill="none" stroke="#fff" strokeWidth="2.5"/>

                    {/* Second ring */}
                    <circle cx="255" cy="20" r="12" fill="#ffb94a" stroke="#ffb94a" strokeWidth="5" />
                    <path d="M249,20 L253,25 L261,15" fill="none" stroke="#fff" strokeWidth="2.5" />
                    
                    {/* Third ring */}
                    <circle cx="440" cy="20" r="12" fill="white" stroke="#ffb94a" strokeWidth="5" />
                    
                    {/* Fourth ring */}
                    <circle cx="625" cy="20" r="12" fill="white" stroke="lightgray" strokeWidth="3" />

                    {/* Text labels */}
                    <text x="70" y="60" textAnchor="middle" fill="black" fontSize="0.9rem" fontWeight="bold">Genel Bilgiler</text>
                    <text x="255" y="60" textAnchor="middle" fill="black" fontSize="0.9rem" fontWeight="bold">Araç Bilgileri</text>
                    <text x="440" y="60" textAnchor="middle" fill="black" fontSize="0.9rem" fontWeight="bold">Poliçe İşlemleri</text>
                    <text x="625" y="60" textAnchor="middle" fill="black" fontSize="0.9rem">Ödeme Bilgileri</text>
                </svg>
            </Box>

            <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                sx={{
                  height: '50px',
                  width: '60vw',
                  border: 'solid',
                  borderColor: '#e2edfd',
                  borderRadius: '15px',
                  borderWidth: '2px',
                  fontSize: '1.1rem',
                  my: 2,
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

            <InsuranceTable /> {/* Added the table here */}

            <Box 
                sx={{ mt: 2,
                    width: '38vw', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                     }}
            >
                <Button onClick={handleBackwardClick} variant="contained" size="large" sx={{ backgroundColor: '#018fec', width: '200px', borderRadius: '20px', fontFamily: 'Nunito Sans', textTransform: 'capitalize'}}>
                    Geri
                </Button>
                
                <Button onClick={handleForwardClick} variant="contained" size="large" sx={{ backgroundColor: '#018fec', width: '200px', borderRadius: '20px', fontFamily: 'Nunito Sans', textTransform: 'capitalize', }}>
                    Seç
                </Button>
            </Box>

        </Container>
    );
};

export default PoliceIslemleri;
