import React, { useState, useEffect } from "react";
import Navbar from "./layout/header/Navbar";
import axios from "axios";
import "./App.css";
import "./style.css";
import CountryDetails from "./pages/CountryDetails";
import CountryList from "./pages/CountryList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <>
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <Router>
        <div className={`App ${isDarkMode ? "dark" : "light"}`}>
          {/* <div className="app"> */}
          <Routes>
            <Route
              exact
              path="/"
              element={<CountryList isDarkMode={isDarkMode} />}
            />
            <Route
              path="/countries/:countryName"
              element={<CountryDetails isDarkMode={isDarkMode} />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
