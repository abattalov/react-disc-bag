import React from 'react'
import Navbar from './components/Navbar'
import Interface from './components/Interface'
import BagContainer from './components/BagContainer'
import {Routes, Route} from 'react-router-dom'
import DiscContainer from './components/DiscContainer'


import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/discs' element={<DiscContainer/>}/>
      </Routes>
      <Interface/>
      {/* <BagContainer/> */}
    </div>
  );
}

export default App;
