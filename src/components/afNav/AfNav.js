import * as React from 'react';
import { Box, Typography } from '@mui/material'; // Yeh line lazmi hai
import LeftSidebar from '../leftSidebar/LeftSidebar';
import MovieList from '../movielist/MovieList';
import RightBar from '../rightBar/RightBar'
import { useState } from 'react';
// import LeftSidebar from './components/leftSidebar/LeftSidebar'


export default function Main() {
const [selectedGenreId, setSelectedGenreId] = useState(null);  return (
    <Box sx={{ 
      width: '99%', 
      display: 'flex', 
      justifyContent:{xs:'none',sm:'none',md:'space-evenly',lg:'space-between'},
      flexDirection:'row'
      // gap: '30px', // Gap thoda kam rakhein taake 3 columns fit aa saken
      // alignItems: 'flex-start', // YEH LAZMI HAI STICKY KE LIYE
      // border:'1px solid red'
    }}>
      <LeftSidebar />
      
      {/* MovieList center mein hai, iski width flexible honi chahiye */}
      {/* <Box sx={{ flexGrow: 1 }}> */}
        <MovieList selectedGenreId={selectedGenreId}/>
      {/* </Box> */}
      
      <RightBar selectedGenreId={selectedGenreId} 
        setSelectedGenreId={setSelectedGenreId}/>
    </Box>
  );
}