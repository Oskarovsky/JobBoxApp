import React, { useState, useEffect } from "react";

const IndustryBox = () => {
    const [industryOptions, setIndustryOptions] = useState([]);
    const [selectedIndustry, setSelectedIndustry] = useState(0);

    useEffect(() => {
        // Fetch industry data from your API
        fetch("http://your-api-endpoint.com/industries")
            .then((response) => response.json())
            .then((data) => {
                // Assuming the API response is an array of objects with 'id' and 'name' properties
                setIndustryOptions(data);
            })
            .catch((error) => console.error("Error fetching industry data:", error));
    }, []);

    const handleIndustryChange = (event) => {
        const value = parseInt(event.target.value, 10);
        setSelectedIndustry(value);
    };

    return (
        <select
            className="form-input mr-10 select-active input-industry"
            value={selectedIndustry}
            onChange={handleIndustryChange}
        >
            <option value={0}>Select an industry</option>
            {industryOptions.map((industry) => (
                <option key={industry.id} value={industry.id}>
                    {industry.name}
                </option>
            ))}
        </select>
    );
};

export default IndustryBox;