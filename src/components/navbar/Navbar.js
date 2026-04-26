import React, { useContext, useState } from 'react';
import { MovieContext } from '../context/MovieContext';
import { AppBar, Toolbar, Typography, InputBase, Box, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu'; // Mobile menu ke liye

export default function Navbar () {
    const [searchTerm, setSearchTerm] = useState('');
    const { setQuery } = useContext(MovieContext);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        
        if (value.length > 2) {
            setQuery(value);
        } else if (value.length === 0) {
            setQuery(''); // Maine Marvel hata diya taake default Top Rated aayein
        }
    };

    return (
        <AppBar position="sticky" sx={{ bgcolor: 'rgb(28,29,31)', boxShadow: 'none', py: { xs: 0.5, md: 1 } }}>
            <Toolbar sx={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                gap: { xs: 1, md: 2 }, // Mobile par elements ke beech thoda gap
                px: { xs: 1, md: 3 } // Side padding responsive
            }}>
                
                {/* 1. Mobile Menu Icon (Sirf mobile par nazar aayega) */}
                <IconButton
                    sx={{ color: 'white', display: { xs: 'block', md: 'none' }, p: 0 }}
                >
                    <MenuIcon />
                </IconButton>

                {/* 2. Logo Section - Mobile par variant chota kar diya */}
                <Typography 
                    variant="h5" 
                    sx={{ 
                        fontWeight: 'bold', 
                        letterSpacing: '1px',
                        fontSize: { xs: '1.2rem', md: '1.5rem' }, // Responsive font
                        display: { xs: 'none', sm: 'block' } // Bohat chote mobiles par logo hide kar sakte hain ya rakhein
                    }}
                >
                    <span style={{ color: '#fff' }}>Cine</span>
                    <span style={{ color: '#00bcd4' }}>Verse</span>
                </Typography>

                {/* 3. Centered Search Bar - Width responsive kar di */}
                <Box sx={{ 
                    position: 'relative', 
                    borderRadius: '50px', 
                    bgcolor: '#e0e0e0', 
                    width: { xs: '100%', sm: '70%', md: '500px' }, // Mobile par poori width
                    display: 'flex',
                    alignItems: 'center',
                    px: { xs: 1, md: 2 },
                    height: { xs: '38px', md: '45px' }, // Mobile par thoda slim
                    mx: { xs: 0, md: 'auto' } // Desktop par auto margin se center hoga
                }}>
                    <SearchIcon sx={{ color: '#666', mr: 1, fontSize: { xs: '20px', md: '24px' } }} />
                    <InputBase
                        placeholder="Search movies..."
                        fullWidth
                        value={searchTerm}
                        onChange={handleInputChange}
                        sx={{ 
                            fontSize: { xs: '0.8rem', md: '0.9rem' }, 
                            color: '#333',
                            '& .MuiInputBase-input::placeholder': { color: '#666', opacity: 1 }
                        }}
                    />
                </Box>

                {/* 4. Right Side Placeholder (Profile icon ke liye jagah) */}
                <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    width: { xs: 'auto', md: '100px' }, 
                    justifyContent: 'flex-end' 
                }}>
                    {/* Aap yahan Profile Avatar daal sakti hain jaisa image mein tha */}
                    
                </Box>

            </Toolbar>
        </AppBar>
    );
};

