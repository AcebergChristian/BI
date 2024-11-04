import logo from './logo.svg';
import React, { Component, useState, useRef, useEffect } from 'react'
import './App.css';
import { Link, Routes, Router, Route, BrowserRouter } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import Login from './components/Login'
import Map from './components/Map'
import 'echarts/extension/bmap/bmap';


function App() {
  return (
    <div className="App">

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/nav" element={<Nav />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/map/:select_val" element={<Map />} />
        </Routes>


    </div >
  );
}

export default App;
