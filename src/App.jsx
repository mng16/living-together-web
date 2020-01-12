import React from 'react';
import logo from './logo.svg';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import ManageInfo from './components/ManageInfo/ManageInfo';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
<>
    <Router>
      <NavBar />
      <Route path = "/" exact component = {Home} />
      <Route path = "/manageInfo" exact component = {ManageInfo} />
    </Router>

    </>
  );
}

export default App;
