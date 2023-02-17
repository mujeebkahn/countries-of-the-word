import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CountryDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { country } = location.state;

  const gotoHomePage = () => {
    navigate("/");
  };
  return (
    <div className="country-detail m-4">
      <button className="btn btn-dark mb-2" onClick={gotoHomePage}>
        Back
      </button>
      <div className="row">
        <div className="col-md-6">
          <img src={country.flags.svg} alt={country.name.common} />
        </div>
        <div className="col-md-6">
          <h2>{country.name.common}</h2>
          <div className="row">
            <div className="col-md-6">
              <p>Capital: {country.capital}</p>
              <p>Population: {country.population}</p>
              <p>Region: {country.region}</p>
              <p>Subregion: {country.subregion}</p>
            </div>
            <div className="col-md-6">
              <p>Capital: {country.capital}</p>
              <p>Population: {country.population}</p>
              <p>Region: {country.region}</p>
              <p>Subregion: {country.subregion}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
