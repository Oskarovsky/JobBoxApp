import React, {useEffect, useState} from "react";
import Link from "next/link";
const ExperienceLevelFilter = () => {

    const [experience, setExperience] = useState(null);
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        // Pobieranie danych lokalizacji z API REST
        fetch('http://localhost:8080/api/filterOffers/experienceLevel')
            .then((response) => response.json())
            .then((data) => {
                setExperience(data)
                setLoading(false)
            })
            .catch((error) => {
                console.error('Error fetching location data:', error);
            });
    }, []);

    if (isLoading) return <p>Loading...</p>
    if (!experience) return <p>No profile data</p>

        return (
            <div className="filter-block mb-30">
                <h5 className="medium-heading mb-10">Experience Level</h5>
                <div className="form-group">
                    <ul className="list-checkbox">
                        {experience.map((experience) => (
                            <li key={experience.id}>
                                <label className="cb-container">
                                    <input type="checkbox" defaultChecked={experience.checked} />
                                    <span className="text-small">{experience.experienceLevelName}</span>
                                    <span className="checkmark" />
                                </label>
                                <span className="number-item">{experience.count}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
};

export default ExperienceLevelFilter;
