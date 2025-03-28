import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeScreen from "./pages/Home";

function App() {
  return (
    <Router basename="/my-portfolio">
      <div className="app" style={{backgroundColor: '#333333', height: '100vh'}}>
        <div style={{height: '15%'}}>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
