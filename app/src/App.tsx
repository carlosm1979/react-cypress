import React from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { Add } from './pages/Add';
import { Home } from './pages/Home';

const AppRoutes = () => {
  return (<Routes>
    <Route path="/add" element={<Add />} />
    <Route path="/home" element={<Home />} />
  </Routes>)
}

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

      <AppRoutes />

    </div>
  );
}

export default App;
