import React, { useContext, useState } from 'react';
import { MovieContext } from '../context/MovieContext'; // Path check kar lein
import { AppBar, Toolbar, Typography, InputBase, Box, IconButton, Drawer } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu'; 
import RightBar from '../rightBar/RightBar';

export default function Navbar() {
    const [searchTerm, setSearchTerm] = useState('');
    
    // 1. Context se saari zaroori states lein
    // Ab selectedGenreId yahan local nahi hai, global hai
    const { setQuery, selectedGenreId, setSelectedGenreId } = useContext(MovieContext);
    
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        
        if (value.length > 2) {
            setQuery(value);
        } else if (value.length === 0) {
            setQuery(''); 
        }
    };

    // Drawer toggle function
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsDrawerOpen(open);
    };

    return (
        <AppBar position="sticky" sx={{ bgcolor: 'rgb(28,29,31)', boxShadow: 'none', py: { xs: 0.5, md: 1 } }}>
            <Toolbar sx={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                gap: { xs: 3, md: 2 }, 
                px: { xs: 1, md: 3 } 
            }}>
                
                {/* Logo Section */}
                <Typography 
                    variant="h5" 
                    sx={{ 
                        fontWeight: 'bold', 
                        letterSpacing: '1px',
                        fontSize: { xs: '1.2rem', md: '1.5rem' },
                    }}
                >
                    <span style={{ color: '#fff' }}>Cine</span>
                    <span style={{ color: '#00bcd4' }}>Verse</span>
                </Typography>

                {/* Search Bar */}
                <Box sx={{ 
                    position: 'relative', 
                    borderRadius: '50px', 
                    bgcolor: '#e0e0e0', 
                    width: { xs: '60%', sm: '70%', md: '500px' }, 
                    display: 'flex',
                    alignItems: 'center',
                    px: { xs: 1, md: 2 },
                    height: { xs: '38px', md: '45px' }, 
                    mx: { xs: 0, md: 'auto' } 
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

                {/* Mobile Menu Icon */}
                <IconButton
                    onClick={toggleDrawer(true)}
                    sx={{ color: 'white', display: { xs: 'block', md: 'none' }, p: 0 }}
                >
                    <MenuIcon />
                </IconButton>

                {/* Right Side Drawer (Mobile Sidebar) */}
                <Drawer 
                    anchor="right" 
                    open={isDrawerOpen} 
                    onClose={toggleDrawer(false)}
                >
                    <Box sx={{ width: 260, bgcolor: '#121212', height: '100%' }}>
                        <RightBar 
                            mobileView={true} 
                            selectedGenreId={selectedGenreId} 
                            // Jab genre select ho toh global state update karein aur drawer band kar dein
                            setSelectedGenreId={(id) => {
                                setSelectedGenreId(id); 
                                setIsDrawerOpen(false); 
                            }}
                        />
                    </Box>
                </Drawer>

            </Toolbar>
        </AppBar>
    );
};