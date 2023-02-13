import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((res) => {
      setCountries(res.data);
      setFilteredCountries(res.data);
    });
  }, []);

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);

    setFilteredCountries(
      countries.filter((country) =>
        country.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);

    setFilteredCountries(
      countries.filter(
        (country) =>
          e.target.value === "All" || country.region === e.target.value
      )
    );
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      <header>
        <h1>Countries of the World</h1>
        <div>
          <input
            type="text"
            placeholder="Search for a country"
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
          <select value={selectedRegion} onChange={handleRegionChange}>
            <option value="All">All</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
          <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
        </div>
      </header>
      <main>
        {filteredCountries.map((country) => (
          <div key={country.alpha3Code}>
            <h2>{country.name}</h2>
            <img src={country.flag} alt={`Flag of ${country.name}`} />
            <p>Population: {country.population}</p>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital}</p>
          </div>
        ))}
      </main>
    </div>
  );
}
//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//     <nav class="navbar">
//       <h1>My Website</h1>
//       <label class="switch">
//         <input type="checkbox" />
//         <span class="slider round"></span>
//       </label>
//     </nav>
//   );

// }

export default App;
