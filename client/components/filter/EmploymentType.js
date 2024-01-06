import React, {useEffect, useState} from "react";
import Link from "next/link";
const EmploymentType = () => {

    const [employmentTypes, setEmploymentType] = useState(null);
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        // Pobieranie danych lokalizacji z API REST
        fetch('http://localhost:8080/api/filterOffers/employmentType')
            .then((response) => response.json())
            .then((data) => {
                setEmploymentType(data)
                setLoading(false)
            })
            .catch((error) => {
                console.error('Error fetching location data:', error);
            });
    }, []);

    if (isLoading) return <p>Loading...</p>
    if (!employmentTypes) return <p>No profile data</p>

        return (
            <div className="filter-block mb-30">
                <h5 className="medium-heading mb-10">Employment Type</h5>
                <div className="form-group">
                    <ul className="list-checkbox">
                        {employmentTypes.map((employmentType) => (
                            <li key={employmentType.id}>
                                <label className="cb-container">
                                    <input type="checkbox" defaultChecked={employmentType.checked} />
                                    <span className="text-small">{employmentType.employmentTypeName}</span>
                                    <span className="checkmark" />
                                </label>
                                <span className="number-item">{employmentType.count}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
};

export default EmploymentType;
