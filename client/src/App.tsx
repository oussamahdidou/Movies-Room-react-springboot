import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Components/Card/Card';
import CardList from './Components/CardList/CardList';

function App() {
  return (
    <div className="App">
      <CardList Id={0} Titre={''} Description={''} Price={0}></CardList>
    </div>
  );
}

export default App;
