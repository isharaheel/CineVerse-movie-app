import React, { useContext, useMemo } from 'react'; 
import { MovieContext } from '../context/MovieContext';
import { Box, Chip, Typography } from '@mui/material';
import HeroSec from '../heroSec/HeroSec.js';
import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
function GradientCircularProgress() {
  return (
    <React.Fragment>
      <svg width={0} height={0}>
        <defs>
          <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e01cd5" />
            <stop offset="100%" stopColor="#1CB5E0" />
          </linearGradient>
        </defs>
      </svg>
      <CircularProgress
        aria-label="Loading…"
        sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }}
      />
    </React.Fragment>
  );
}
export default function MovieList ({ selectedGenreId }){
      const { movies, loading, error } = useContext(MovieContext);
      const navigate = useNavigate();

    const filteredMovies = useMemo(() => {
        if (!movies) return [];
        if (!selectedGenreId || selectedGenreId === 'All') return movies;
        
        return movies.filter(movie => 
            movie.genre_ids && movie.genre_ids.includes(selectedGenreId)
        );
    }, [movies, selectedGenreId]);

    if (loading) return <h2 style={{ color: 'white', textAlign: 'center', marginTop: '50px' }}><GradientCircularProgress/></h2>;
    if (error) return <h2 style={{ color: 'red', textAlign: 'center' }}>{error}</h2>;

    return (
        <Box sx={{ 
            display: "flex", 
            flexDirection: 'column', 
            gap: '20px', 
            marginTop: '20px',
            width:{xs:'100%',sm:'100%',md:" 100%",lg:"100%"},
            alignItems:{xs:'center',sm:'center'},
            // border:'1px solid red'
        }}>
        

            <Box sx={{ 
                width: {xs:'90%',sm:'100%',md:'97%',lg:'98%'},
                display: 'grid', 
                gridTemplateColumns: {
                    xs: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(3, 1fr)',
                    lg: 'repeat(5, 1fr)' 
                }, 
                gap: '20px', 
                padding: '10px',
                backgroundColor: '#121212',
                minHeight: 'auto', 
            }}>
                {filteredMovies.length > 0 ? (
                    filteredMovies.map((movie) => (
                        <Box key={movie.id} onClick={() => navigate(`/movie/${movie.id}`)} sx={{ 
                            backgroundColor: 'rgb(32,32,32)', 
                            borderRadius: '12px', 
                            overflow: 'hidden',
                            transition: 'transform 0.3s',
                            cursor: 'pointer',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
                            height: 'auto',
                            textAlign: 'center',
                            '&:hover': { transform: 'scale(1.03)' } 
                        }}>
                            <img 
                                src={movie.poster_path 
                                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
                                    : 'https://via.placeholder.com/400x600?text=No+Poster'} 
                                alt={movie.title} 
                                style={{ 
                                    width: '90%', 
                                    height: '220px', 
                                    objectFit: 'fit', 
                                    borderRadius: '10px', 
                                    marginTop: '10px' 
                                }}
                            />
                            <Box sx={{ padding: '15px' }}>
                                <Typography sx={{ 
                                    color: 'white', 
                                    fontSize: '13px', 
                                    fontWeight: 'bold',
                                    mb: 1,
                                    textAlign: 'left',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis' 
                                }}>
                                    {movie.title || "UNTITLED"}
                                </Typography>
                                
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography sx={{ color: '#bbb', fontSize: '14px' }}>
                                        {movie.release_date ? movie.release_date.split('-')[0] : 'N/A'}
                                    </Typography>
                                    
                                    <Chip 
                                        label={movie.vote_average ? movie.vote_average.toFixed(1) : "0.0"} 
                                        sx={{
                                            background: 'rgb(11,163,187)',
                                            borderRadius: '7px',
                                            color: 'white',
                                            height: '23px',
                                            fontSize: '11px',
                                            fontWeight: 'bold'
                                        }}
                                    />
                                </Box>
                            </Box>
                        </Box>
                    ))
                ) : (
                    <Typography sx={{ color: 'white', gridColumn: '1/-1', textAlign: 'center', mt: 4 }}>
                        No movies found for this genre.
                    </Typography>
                )}
            </Box>
        </Box>
    );
}