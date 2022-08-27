import React, {useEffect} from 'react';
import Navbar from './components/Navbar';
import Interface from './components/Interface';
import BagContainer from './components/BagContainer';
import {Routes, Route} from 'react-router-dom';
import DiscContainer from './components/DiscContainer';
import Home from './components/Home';
import BagForm from './components/BagForm';
import Footer from './components/footer';
import {connect} from 'react-redux';
import { getBags } from './actions';



import './App.css';

function App(props) {

  useEffect(() =>{
    props.getBags();
  },[props.state])

  if(props.loading){
    return (
      <h3>Loading...</h3>
    )
  }

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
      <Footer/>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    loading: state.loading
  }
}

export default connect(mapStateToProps,{getBags})(App);
