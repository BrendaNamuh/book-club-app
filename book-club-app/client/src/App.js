import logo from './logo.svg';
import './App.css';
import {SearchBar} from  './components/SearchBar/SearchBar.jsx'; 
import {SearchResults} from  './components/SearchBar/SearchResults.jsx'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { useState } from 'react';
import NavBar from './components/NavBar/NavBar.jsx';
import CurrentlyReading from './components/CurrentlyReading/CurrentlyReading.js'; // Example component
import UpcomingEvents from './components/UpcomingEvents/UpcomingEvents.jsx'; // Example component
import PastEvents from './components/PastEvents/PastEvents.jsx'; // Example component

function App() {
  const [results, setResults] = useState([]);
  return (
    <div className='App'>
      <div className='nav-bar-container'>
      </div>
      <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<CurrentlyReading/>} />
        <Route path="/upcoming-events" element={<UpcomingEvents />} />
        <Route path="/past-events" element={<PastEvents />} />
      </Routes>
      </Router>
      
        
      {/* <div className='search-bar-container'>
        <SearchBar setResults={setResults} />
        <SearchResults results={results}/>
      </div> */}

    </div>
   
  );
}

export default App;
