import "./App.css";
import React, { useState } from "react";
import {Route, Routes} from 'react-router-dom';

import { moviesData } from "./comp/Data";
import { Movielist } from "./Movielist";
import Add from "./comp/Add";
import  Navbar  from "./Navbar";
import Contact from "./Contact";
import Footer from "./comp/Footer";
import Trailer from "./Trailer";



function App() {
  const [MovieData, setMovieData] = useState(moviesData);
  // ici on va debuter les fonctions
  const handledelete = (ID) => {
    setMovieData(MovieData.filter((e) => e.id !== ID));
  };
  const handleseen = (ID) => {
    console.log(handleseen);
    setMovieData(
      MovieData.map((e) => (e.id == ID ? { ...e, seen: !e.seen } : { ...e }))
    );
  };
  const addFilm = (newMovie) => {
    setMovieData([...MovieData, newMovie]);
  };

  return (
    <div className="App">
      
      <Navbar />
      
      
      <Routes>
        <Route path="/" element={<Movielist MovieData={MovieData}
        handledelete={handledelete}
        handleseen={handleseen} />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/add" element={<Add/>} />
        <Route path='/trailer/:id' element={<Trailer/>} />

      </Routes>

      <Footer/>
      
      
      
    </div>
  );
}

export default App;
