import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/templates/Home";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
