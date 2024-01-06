import React, {useEffect, useState} from "react";
import Link from "next/link";
const LocationFilter = () => {

    const [locations, setLocations] = useState(null);
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        // Pobieranie danych lokalizacji z API REST
        fetch('http://localhost:8080/api/filterOffers/location')
            .then((response) => response.json())
            .then((data) => {
                setLocations(data)
                setLoading(false)
            })
            .catch((error) => {
                console.error('Error fetching location data:', error);
            });
    }, []);

    if (isLoading) return <p>Loading...</p>
    if (!locations) return <p>No profile data</p>

        return (
            <div className="filter-block mb-30">
                <h5 className="medium-heading mb-10">Location</h5>
                <div className="form-group">
                    <ul className="list-checkbox">
                        {locations.map((location) => (
                            <li key={location.id}>
                                <label className="cb-container">
                                    <input type="checkbox" defaultChecked={location.checked} />
                                    <span className="text-small">{location.locationName}</span>
                                    <span className="checkmark" />
                                </label>
                                <span className="number-item">{location.count}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
};

export default LocationFilter;
