import './App.css';

import Home from './components/Home';
import About from './components/About';
import Nav from './components/Nav';
import Cars from './components/Cars';
import Car from './components/Car';

import {BrowserRouter, Link, NavLink, Routes, Route} from 'react-router';

const App = () => {
  return (
    <div className="App">
      <h2>React Router Demo</h2>

      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="*" element={<h2>404 page not found</h2>} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<h2>Admin page (secret shhhh!)</h2>} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/cars/:id" element={<Car />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
