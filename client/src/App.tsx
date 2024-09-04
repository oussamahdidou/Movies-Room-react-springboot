import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Components/Card/Card';
import CardList from './Components/CardList/CardList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import { Outlet } from 'react-router';

function App() {
  return (
    <div className="App">
      <Outlet></Outlet>
    </div>
  );
}

export default App;
