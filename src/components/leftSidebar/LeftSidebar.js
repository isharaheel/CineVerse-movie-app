 import React, { useContext } from 'react'
 import { Box, Grid, Typography, Stack, IconButton, Chip } from '@mui/material';
import { MovieContext } from '../context/MovieContext';
 
 
 
 
 export default function LeftSidebar(params) {
        const { movies, loading, error } = useContext(MovieContext);
    
    return(
        <>
        
        <Box sx={{padding:'10px',width:'17%',height:'140vh',flexDirection:'column',gap:'20px',alignItems:'center',marginTop:'20px',display: { xs: 'none', sm: 'none',md:'none',lg:'flex' }
        }}>


 {movies && movies.slice(0, 4).map((movie)=> (
                <>
                
<Box key={movie.id} sx={{ 
                    backgroundColor: 'rgb(32,32,32)', 
                    borderRadius: '12px', 
                    // overflow: 'hidden',
                    transition: 'transform 0.3s',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
                    // border:'1px solid red',
                    height:'300px',
                    width:'300px',
                    textAlign:'center'
                    
                }}>
                    <img 
                        src={movie.poster_path 
                            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
                            : 'https://via.placeholder.com/400x600?text=No+Poster'} 
                        alt={movie.title} 
                        style={{ width: '90%', height: '200px', objectFit: 'fit',borderRadius:'10px',marginTop:'10px' }}
                    />
                    <Box sx={{ padding: '15px' }}>
                        {/* 2. 'title' small letters mein hai (TMDB standard) */}
                        <Typography style={{ color: 'white', fontSize: '12px', margin: '0 0 5px 0',textAlign:'left',fontFamily:'sans-serif' }}>
                            {movie.title ? movie.title : "UNTITLED"}
                        </Typography>
                        
                        {/* 3. Year ke liye 'release_date' use karein */}
                       <Box sx={{display:'flex',justifyContent:'space-between'}}>
                      <Typography style={{ color: 'whitesmoke', margin: 0,fontSize:'15px',fontFamily:'sans-serif' }}>
                            {movie.release_date ? movie.release_date.split('-')[0] : 'N/A'}
                      </Typography>
                        
                        {/* 4. Bracket () hata diye kyunki Type function nahi string hai */}
                    <Chip label="8.5" sx={{background:'rgb(11,163,187)',borderRadius:'7px',color:'white',height:'23px'}}/>

                       </Box>
                    </Box>
                </Box>
                
                
                
                
                
                </>
            ))}


        </Box>
        
        
        
        
        </>
    )
 }