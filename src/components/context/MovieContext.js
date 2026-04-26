import React, { createContext, useState, useEffect } from 'react';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState(''); 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const API_KEY = '1dda2907e82577cde2b724373c642f39'; 

    const fetchMovies = async () => {
        setLoading(true);
        setError(null);
        try {
            let url = "";
            if (searchQuery) {
                url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}&language=en-US`;
            } else {
                url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
            }

            const response = await fetch(url);
            const data = await response.json();
            
            if (data.results) {
                setMovies(data.results);
            } else {
                setError("No movies found.");
                setMovies([]);
            }
        } catch (err) {
            setError("Network issue! Please check your connection.");
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchMovies();
    }, [searchQuery]);

    return (
        /* Value mein 'setQuery' pass kiya hai jo 'setSearchQuery' ko trigger karega */
        <MovieContext.Provider value={{ movies, setQuery: setSearchQuery, loading, error }}>
            {children}
        </MovieContext.Provider>
    );
};