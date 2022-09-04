import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from './Pages/Home'
import Test from './Pages/Test'
import Landing from './Pages/Landing'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Map from './Pages/Map'
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test /> }/>
        <Route path="/landing" element={<Landing /> }/>
		<Route path="/about" element={<About /> } />
		<Route path="/contact" element={<Contact /> } />
		<Route path="/map" element={<Map /> } />
      </Routes>
    </Router>
  );
}

export default App;
