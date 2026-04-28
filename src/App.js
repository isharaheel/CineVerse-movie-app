import React from 'react';
import Navbar from './components/navbar/Navbar';
import MovieList from './components/movielist/MovieList';
// import MainLayout from './components/main/MainLayout'
import Main from './components/afNav/AfNav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieDetails from './components/Moviedetail/MovieDetail';
// import Navbar from './components/Navbar';
// import MovieList from './components/MovieList';

export default function App(params) {
  return (
    <div style={{ backgroundColor: '#121212', minHeight: '100vh' }}>
      <Router>
        {/* Navbar hamesha top par rahega, har page par */}
        <Navbar /> 

        <Routes>
          {/* Main (jis mein MovieList hai) sirf home page par dikhega */}
          <Route path="/" element={<Main />} />

          {/* Movie Details page tab dikhega jab card par click hoga */}
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </Router>
    </div>
  );
}


