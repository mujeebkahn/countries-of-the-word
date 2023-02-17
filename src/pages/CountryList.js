import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CountryList() {
  const navigate = useNavigate();
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");

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

  const handleCountryClick = (country) => {
    navigate(
      `/countries/${country.name.common ? country.name.common : country.name}`,
      { state: { country } }
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

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <>
      <div className="top-items">
        <div className="row">
          <div className="col-md-6">
            <input
              type="text"
              placeholder="Search for a country"
              value={searchTerm}
              onChange={handleSearchTermChange}
            />
          </div>
          <div className="col-md-6">
            <select value={selectedRegion} onChange={handleRegionChange}>
              <option value="All">All</option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </div>
      </div>
      <div className="country-list">
        {filteredCountries.map((country, idx) => (
          <div
            key={idx}
            onClick={() => handleCountryClick(country)}
            className="country-list-items"
          >
            <div className="img-main">
              <img src={country.flags.svg} alt={country.name.common} />
            </div>
            <div className="country-details">
              <h3>
                {country.name.common ? country.name.common : country.name}
              </h3>
              <p>Population: {country.population}</p>
              <p>Region: {country.region}</p>
              <p>Capital: {country.capital}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CountryList;
