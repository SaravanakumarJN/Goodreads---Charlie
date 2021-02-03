import React from 'react'
import './App.css'
import { Search } from './components/searchBar/Search'
import { Routes } from './routes/Routes'
const App = () => {
  return (
    <div>
      <Routes />
      <Search></Search>
    </div>
  );
};

export default App;
