import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import StarIcon from '@mui/icons-material/Star';

// Agar image 'src' folder mein hai toh aise import karein:
// import heroImg from './image/hero1.jpg'; 

export default function HeroSec() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: {xs:'90%',sm:"90%",md:'96%',lg:'97%'},
        height: '270px',
        borderRadius: '15px',
        overflow: 'hidden',
        // border:'1px solid red',
        mb: 4,
        display: 'flex',
        alignItems: 'center',
        paddingLeft:'30px',
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8) 10%, rgba(0,0,0,0) 60%), url('./image/hero1.jpg')`,
        zIndex: 1,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Text Content */}
      <Box sx={{ maxWidth: '500px', zIndex: 2 }}>
        <Typography 
          variant="caption" 
          sx={{ color: '#00bcd4', fontWeight: 'bold', fontSize: '12px', display: 'block', mb: 0.5 }}
        >
          Hero
        </Typography>
        
        <Typography 
          variant="h4" 
          sx={{ color: 'white', fontWeight: 'bold', mb: 1, fontSize: '28px' }}
        >
          Interstellar
        </Typography>

        <Typography 
          variant="body2" 
          sx={{ color: {xs:'black',sm:'black',md:'#bbb',lg:'#bbb'}, mb: 1.5, fontSize: '13px', maxWidth: '400px', lineHeight: 1.4 }}
        >
          A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.
        </Typography>

        <Stack direction="row" spacing={0.5} alignItems="center" sx={{ mb: 2 }}>
          <StarIcon sx={{ color: '#ffc107', fontSize: '16px' }} />
          <Typography sx={{ color: 'white', fontSize: '12px', fontWeight: 'bold' }}>
            8.6<span style={{ color: '#777', fontWeight: 'normal' }}>/10</span>
          </Typography>
        </Stack>

        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#00bcd4',
              color: 'black',
              fontWeight: 'bold',
              borderRadius: '20px',
              px: 3, py: 0.8, fontSize: '13px',
              textTransform: 'none',
              '&:hover': { backgroundColor: '#0097a7' }
            }}
          >
            Watch Now
          </Button>
          
          <Button
            variant="outlined"
            startIcon={<AddIcon />}
            sx={{
              color: 'white',
              borderColor: '#444',
              borderRadius: '20px',
              px: {xs:1 ,sm:2,md:2,lg:2.5},
              fontSize: '13px',
              textTransform: 'none',
              backgroundColor: 'rgba(255,255,255,0.05)',
              '&:hover': { borderColor: 'white', backgroundColor: 'rgba(255,255,255,0.1)' }
            }}
          >
            Add to Watchlist
          </Button>
        </Stack>
      </Box>
</Box>
    
  );
}