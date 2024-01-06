import React, { useState, useEffect } from "react";

const IndustryBox = () => {
    const [industryOptions, setIndustryOptions] = useState([]);
    const [selectedIndustry, setSelectedIndustry] = useState(0);

    useEffect(() => {
        // Fetch industry data from your API
        fetch("http://localhost:8080/api/filterEmployer/industryBoxList")
            .then((response) => response.json())
            .then((data) => {
                // Assuming the API response is an array of objects with 'industryName' property
                setIndustryOptions(data);
            })
            .catch((error) => console.error("Error fetching industry data:", error));
    }, []);

    const handleIndustryChange = (event) => {
        const value = event.target.value;
        setSelectedIndustry(value);
    };

    return (
        <select
            className="form-input mr-10 select-active input-industry"
            value={selectedIndustry}
            onChange={handleIndustryChange}
        >
            <option value="">Select an industry</option>
            {industryOptions.map((industry, index) => (
                <option key={index} value={industry.industryName}>
                    {industry.industryName}
                </option>
            ))}
        </select>
    );
};

export default IndustryBox;