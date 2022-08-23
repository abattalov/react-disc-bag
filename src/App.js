import React from 'react'
import Navbar from './components/Navbar'
import Interface from './components/Interface'
import BagContainer from './components/BagContainer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Interface/>
      <BagContainer/>
    </div>
  );
}

export default App;
