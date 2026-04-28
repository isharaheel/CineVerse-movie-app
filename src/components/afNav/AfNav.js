import * as React from 'react';
import { Box, Typography } from '@mui/material'; 
import LeftSidebar from '../leftSidebar/LeftSidebar';
import MovieList from '../movielist/MovieList';
import RightBar from '../rightBar/RightBar'
import { useState } from 'react';
import HeroSec from '../heroSec/HeroSec';


export default function Main() {
const [selectedGenreId, setSelectedGenreId] = useState(null);  return (
    <Box sx={{ 
      width: '99%', 
      display: 'flex', 
      justifyContent:{xs:'none',sm:'none',md:'space-evenly',lg:'space-between'},
      flexDirection:'row'
     
    }}>
      <LeftSidebar />
      <Box sx={{display:'flex',flexDirection:'column',gap:"20px",width:'100%'}}>
        <HeroSec />
        <MovieList selectedGenreId={selectedGenreId}/>
     </Box>
      
      <RightBar selectedGenreId={selectedGenreId} 
        setSelectedGenreId={setSelectedGenreId}/>
    </Box>
  );
}