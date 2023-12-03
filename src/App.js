import React from 'react'

import {  Brand,Navbar } from './components'
import { Builder,Footer,Header } from './containers'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import PdfReader from './pages/resumeBuilder/resumeBuilder'
import CoverLetterGenerator from './pages/coverLetterGenerator/coverletterGenerator'
import Home from './pages/Home/Home'
import Contact from './pages/contact/Contact'

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/resumebuilder" element={<><PdfReader /><Footer/></>} />
          </Routes>
          <Routes>
            <Route path="/contact" element={<><Contact /><Footer /></>} />
          </Routes>
        </div>
      </div>
      
    </Router>
  );
};

export default App

