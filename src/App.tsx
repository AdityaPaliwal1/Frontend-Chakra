"use client";

import NavBar from './components/Layout/header';
import Services from './components/pages/Services';
import Landing from './components/pages/Landing';
import Footer from './components/Layout/footer'; 
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/services' element={<Services />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
