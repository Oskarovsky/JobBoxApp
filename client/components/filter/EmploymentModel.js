import React, {useEffect, useState} from "react";
import Link from "next/link";
const EmploymentModel = () => {

    const [employmentModels, setEmploymentModel] = useState(null);
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        // Pobieranie danych lokalizacji z API REST
        fetch('http://localhost:8080/api/filterOffers/employmentModel')
            .then((response) => response.json())
            .then((data) => {
                setEmploymentModel(data)
                setLoading(false)
            })
            .catch((error) => {
                console.error('Error fetching location data:', error);
            });
    }, []);

    if (isLoading) return <p>Loading...</p>
    if (!employmentModels) return <p>No profile data</p>

        return (
            <div className="filter-block mb-30">
                <h5 className="medium-heading mb-10">Employment Model</h5>
                <div className="form-group">
                    <ul className="list-checkbox">
                        {employmentModels.map((employmentModel) => (
                            <li key={employmentModel.id}>
                                <label className="cb-container">
                                    <input type="checkbox" defaultChecked={employmentModel.checked} />
                                    <span className="text-small">{employmentModel.employmentModelName}</span>
                                    <span className="checkmark" />
                                </label>
                                <span className="number-item">{employmentModel.count}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
};

export default EmploymentModel;
