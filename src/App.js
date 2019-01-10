import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './component/Header.js';
import Navbar from './component/Navbar.js';
import Sinhvien from './component/Sinhvien.js'
import Dieuhuong from './router/Dieuhuong';
import * as firebase from 'firebase'
class App extends Component {
constructor(props) {
  super(props);
  
}

  

  render() {
    return (
      <Router>
        <div >
          <Header></Header> 
          <Dieuhuong></Dieuhuong>
          
        </div>
      </Router>
    );
  }
}

export default App;
