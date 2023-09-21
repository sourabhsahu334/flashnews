

import React, { useEffect, useState } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "./App.css"
import Home from './screens/Home';
import ButtonAppBar from './screens/Navbar';
import Policy from './screens/Policy';


function App() {
  const [mode,setDarkmode]=useState();


  return (

 
 <div style={{backgroundColor:"white",}}>
 <Router>
  <ButtonAppBar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/policy' element={<Policy/>}/>
    
  </Routes>
</Router>
 </div>

  )
}

export default App