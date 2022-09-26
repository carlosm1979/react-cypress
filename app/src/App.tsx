import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { Add } from './pages/Add';
import { Home } from './pages/Home';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
        <Link to="/add">go add</Link>
        <Link to="/home">go home</Link>
        </nav>
        <h1>React cypress project</h1>

      </header>

      <Routes>
        <Route path="/add" element={<Add />} />
        <Route path="/home" element={<Home />} />
      </Routes>

    </div>
  );
}

export default App;
