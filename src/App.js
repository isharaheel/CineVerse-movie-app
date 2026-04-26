import React from 'react';
import Navbar from './components/navbar/Navbar';
import MovieList from './components/movielist/MovieList';
// import MainLayout from './components/main/MainLayout'
import Main from './components/afNav/AfNav';
// import Navbar from './components/Navbar';
// import MovieList from './components/MovieList';

function App() {
  return (
    <div style={{ backgroundColor: '#121212', minHeight: '100vh' }}>
    
      {/* Navbar ko hum center content ke upar rakhenge */}
      <Navbar /> 
<Main/>

      {/* <MainLayout border='1px solid red'>
      <MovieList />
    </MainLayout> */}
    </div>
  );
}

export default App;


