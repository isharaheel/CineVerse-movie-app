import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Chip, Button } from '@mui/material';
import MovieList from '../movielist/MovieList';

export default function MovieDetails(params) {
     const { id } = useParams(); // URL se movie ID nikalta hai
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        // TMDB se single movie ka data fetch karein
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=1dda2907e82577cde2b724373c642f39`)
            .then(res => res.json())
            .then(data => setMovie(data));
    }, [id]);

    if (!movie) return <Typography color="white">Loading...</Typography>;

    return (
        <Box sx={{ p: 5, color: 'white' }}>
            <Box sx={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
                {/* Movie Poster */}
                <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    style={{ width: '300px', borderRadius: '20px',objectFit: 'fit', }} 
                />

                {/* Movie Info */}
                <Box sx={{ flex: 1 }}>
                    <Typography variant="h3" sx={{fontFamily:'sans-serif'}}>{movie.title}</Typography>
                    <Typography sx={{color:"whitesmoke",fontWeight:'bold',fontSize:'17px',marginTop:'20px'}}>Release Date : <span style={{color:"whitesmoke",fontSize:'13px'}}>{movie.release_date}</span></Typography>
                    <Typography sx={{ my: 2, color: '#bbb',fontFamily:'sans-serif' }}>{movie.overview}</Typography>
                    {/* <Chip label={movie.vote_average.toFixed(1)} color="primary" /> */}
                    <Box sx={{display:'flex',flexDirection:{xs:'column',sm:'column',md:'column',lg:'row',gap:'20px'}}}>
                    <Button variant="contained" sx={{ fontFamily:'sans-serif',background:'rgb(11,163,187)' }}>▶ PLAY NOW</Button>
                    <Button variant="contained" sx={{ fontFamily:"sans-serif",background:'rgb(11,163,187)'}}> WATCH TRAILER</Button>
                    </Box>
                </Box>
            </Box>
<Typography sx={{fontFamily:'sans-serif',fontSize:'18px',color:'whitesmoke',marginTop:"40px"}}>YOU MAY ALSO LIKE</Typography>
            {/* Yahan aap dobara "Similar Movies" ka grid laga sakti hain */}
            <MovieList />
        </Box>
    );
}