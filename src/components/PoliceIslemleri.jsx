import React, { useState } from 'react';
import { TextField, Button, Container, Grid, Box, MenuItem, InputLabel, Select, FormControl, FormControlLabel, Checkbox, Link, Typography, Autocomplete} from '@mui/material';
import anadoluSigorta from '../assets/images/anadolusigorta2.png';

const PoliceIslemleri = () => {

    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                //justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: "#fff"
            }}
        >
            <Box
                width="99vw"
                display="flex"
                alignItems="center"
                justifyContent="space-between"  // Distributes space between elements
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
                p={1}
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
                  fontSize: '1.1rem'
                }}
            >
                <Typography color="rgb(26, 125, 189)" marginLeft={8} variant="body" fontWeight="bold">
                    Teklif No: 0683119321
                </Typography>

                <Typography color="rgb(26, 125, 189)" marginRight={8} variant="body" fontWeight="bold">
                    Size Özel Tutar: 12482 TL
                </Typography>

            </Box>
           
        </Container>
    );
};

export default PoliceIslemleri;