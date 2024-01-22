import {useEffect, useState} from 'react';

const JobSearch = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [countryOptions, setCountryOptions] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    useEffect(() => {
        // Fetch country data from your API
        fetch("http://localhost:8080/api/filterOffers/countryBoxList")
            .then((response) => response.json())
            .then((data) => {
                // Assuming the API response is an array of objects with 'countryName' property
                setCountryOptions(data);
            })
            .catch((error) => console.error("Error fetching country data:", error));
    }, []);

    return (
        <div>
            {/*<CountryBoxJobOffer/>*/}
            <select
                className="form-input mr-10 select-active input-country"
                value={selectedCountry}
                onChange={(e) => {
                    setSelectedCountry(e.target.value)
                }}>
                <option value="">Select a country</option>
                {countryOptions.map((country, index) => (
                    <option key={index} value={country.countryName}>
                        {country.countryName}
                    </option>
                ))}
            </select>

            <input type="text" className="form-input input-keysearch mr-10" placeholder="Your keyword... "

                   value={searchTerm}
                   onChange={(e) => {
                       setSearchTerm(e.target.value)
                   }}/>
            <button className="btn btn-default btn-find font-sm" onClick={handleSearch}>Search</button>
        </div>
    );
};

export default JobSearch;
