import React, { useState, useEffect } from "react";

const CountryBoxEmployer = () => {
    const [countryOptions, setCountryOptions] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");

    useEffect(() => {
        // Fetch country data from your API
        fetch("http://localhost:8080/api/filterEmployer/countryBoxList")
            .then((response) => response.json())
            .then((data) => {
                // Assuming the API response is an array of objects with 'countryName' property
                setCountryOptions(data);
            })
            .catch((error) => console.error("Error fetching country data:", error));
    }, []);

    const handleCountryChange = (event) => {
        const value = event.target.value;
        setSelectedCountry(value);
    };

    return (
        <select
            className="form-input mr-10 select-active input-country"
            value={selectedCountry}
            onChange={handleCountryChange}
        >
            <option value="">Select a country</option>
            {countryOptions.map((country, index) => (
                <option key={index} value={country.countryName}>
                    {country.countryName}
                </option>
            ))}
        </select>
    );
};

export default CountryBoxEmployer;
