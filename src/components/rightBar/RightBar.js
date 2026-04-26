import React from 'react'
 import { Box, Grid, Typography, Stack, IconButton, Chip } from '@mui/material';



export default function RightBar({ selectedGenreId, setSelectedGenreId }) {
const genres = [
    { id: null, name: 'All' },
    { id: 28, name: 'Action' },
    { id: 18, name: 'Drama' },
    { id: 878, name: 'Sci-Fi' },
    { id: 35, name: 'Comedy' },
  ];
  return (
    <Box sx={{ 
      display: { xs: 'none', md: 'block' }, 
      p: 3, 
      width: '300px', // Width thodi kam rakhein taake layout fit ho
      background: 'rgb(34,36,35)',
      borderLeft: '1px solid #222',
      
      // STICKY PROPERTIES
    //   position: 'sticky', 
    //   top: 0, 
      height: '175vh', 
      zIndex: 10,
      flexShrink: 0 // Taake flex box ise daba na sakay
    }}>
      <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold', color: 'whitesmoke' }}>
        Filters
      </Typography>

    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {genres.map((genre) => (
          <Chip 
            key={genre.name}
            label={genre.name}
            onClick={() => setSelectedGenreId(genre.id)}
            sx={{ 
              backgroundColor: selectedGenreId === genre.id ? '#00bcd4' : 'transparent',
              color: selectedGenreId === genre.id ? 'black' : 'white',
              cursor: 'pointer',
              border:'1px solid lightgrey'
            }}
          />
        ))}
      </Box>
    </Box>
  );
}