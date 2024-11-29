import logo from './logo.svg';
import './App.css';
import {SearchBar} from  './components/SearchBar/SearchBar.jsx'; 
import {SearchResults} from  './components/SearchBar/SearchResults.jsx'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { useState } from 'react';
import NavBar,{viewMode} from './components/NavBar/NavBar.jsx';
import CurrentlyReading from './components/CurrentlyReading/CurrentlyReading.js'; // Example component
import UpcomingEvents from './components/UpcomingEvents/UpcomingEvents.jsx'; // Example component
import PastEvents from './components/PastEvents/PastEvents.jsx'; // Example component


function App() {
  const [results, setResults] = useState([]);
  return (
    <div className='App flex flex-col border-2 border-blue-800 h-[100vh]'>

      <Router> 
      <NavBar/>
      <Routes>
        <Route path="/" element={<CurrentlyReading className="mx-auto" />} />
        <Route path="/upcoming-events" element={<UpcomingEvents className="mx-auto" />} />
        <Route path="/past-events" element={<PastEvents />} />
      </Routes>
      </Router>
      

    </div>
   
  );
}

export default App;
