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

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test /> }/>
        <Route path="/landing" element={<Landing /> }/>

      </Routes>
    </Router>
  );
}

export default App;
