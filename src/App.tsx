import React from 'react';
import './App.css';

import Header from './components/template/Header';
import NoPage from './components/template/NoPage';
import Home from './components/Home/Home';
import Flex from './components/Flex/Flex';
import Grid from './components/Grid/Grid';
import Footer from './components/template/Footer';

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='body-page'>
        <Routes>
          <Route index element={<Home />} />
          <Route path="flex" element={<Flex />} />
          <Route path="grid" element={<Grid />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
