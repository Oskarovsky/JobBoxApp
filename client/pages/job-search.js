import {useEffect, useState} from 'react';

const JobSearch = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');
    const [countryOptions, setCountryOptions] = useState([]);


    useEffect(() => {
        // Fetch country data from your API
        fetch("http://localhost:8080/api/filterOffers/countryBoxList")
            .then((response) => response.json())
            .then((data) => {
                setCountryOptions(data);
            })
            .catch((error) => console.error("Error fetching country data:", error));
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch({ searchTerm, selectedCountry });
    };


    return (
        <div>
            <form onSubmit={handleSearch}>
            <select
                className="form-input mr-10 select-active input-country"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}>
                <option value="">Select a country</option>
                {countryOptions.map((country, index) => (
                    <option key={index} value={country.countryName}>
                        {country.countryName}
                    </option>
                ))}
            </select>
            {/*<CountryBoxJobOffer/>*/}
            <input type="text" className="form-input input-keysearch mr-10" placeholder="Your keyword... "
                   value={searchTerm}
                   onChange={(e) => {
                       setSearchTerm(e.target.value)
                   }}/>
            <button className="btn btn-default btn-find font-sm" type='submit'>Search</button>
            </form>
        </div>
    );
};

export default JobSearch;
