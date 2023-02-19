import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CountryDetails = ({ isDarkMode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { country } = location.state;

  const gotoHomePage = () => {
    navigate("/");
  };
  return (
    <div className="country-detail m-4">
      <button
        className={`btn ${isDarkMode ? "btn-dark" : "btn-light"} mb-2`}
        onClick={gotoHomePage}
        style={{ padding: "10px 35px 10px 11px", border: "1px solid gray" }}
      >
        <svg
          className="arrow-left"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
        </svg>
        Back
      </button>
      <div className="row">
        <div className="col-md-6 pr-3">
          <img
            src={country.flags.svg}
            alt={country.name.common}
            style={{ width: "80%" }}
          />
        </div>
        <div className="col-md-6 pl-3">
          <h2>{country.name.common}</h2>
          <div className="row">
            <div className="col-md-6">
              <p>
                <b>Capital:</b> {country.capital}
              </p>
              <p>
                <b>Population:</b> {country.population.toLocaleString()}
              </p>
              <p>
                <b>Region:</b> {country.region}
              </p>
              <p>
                <b>Subregion:</b> {country.subregion}
              </p>
            </div>
            <div className="col-md-6">
              <p>
                <b>Top Level Domain:</b> {country.topLevelDomain[0]}
              </p>
              <p>
                <b>Currencies:</b> {country.currencies[0].name}
              </p>
              <p>
                <b>Languages:</b>{" "}
                {country.languages.map((lang) => lang.name).join(", ")}
              </p>
              {/* <p>Languages: {" "}{country.region}</p> */}
              <p>
                <b>Subregion:</b> {country.subregion}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
