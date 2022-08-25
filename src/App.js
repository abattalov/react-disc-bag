import React from 'react'
import Navbar from './components/Navbar'
import Interface from './components/Interface'
import BagContainer from './components/BagContainer'
import {Routes, Route} from 'react-router-dom'
import DiscContainer from './components/DiscContainer'
import Home from './components/Home'
import BagForm from './components/BagForm'


import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/discs' element={<DiscContainer/>}/>
        <Route path='/bags' element={<BagContainer/>}/>
        <Route path='/bags/new' element={<BagForm/>}/>
      </Routes>
      {/* <Interface/> */}
    </div>
  );
}

export default App;
