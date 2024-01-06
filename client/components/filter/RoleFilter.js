import React, {useEffect, useState} from "react";
import Link from "next/link";
const RoleFilter = () => {

    const [roles, setRoles] = useState(null);
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        // Pobieranie danych lokalizacji z API REST
        fetch('http://localhost:8080/api/filterOffers/roles')
            .then((response) => response.json())
            .then((data) => {
                setRoles(data)
                setLoading(false)
            })
            .catch((error) => {
                console.error('Error fetching location data:', error);
            });
    }, []);

    if (isLoading) return <p>Loading...</p>
    if (!roles) return <p>No profile data</p>

        return (
            <div className="filter-block mb-30">
                <h5 className="medium-heading mb-10">Roles</h5>
                <div className="form-group">
                    <ul className="list-checkbox">
                        {roles.map((role) => (
                            <li key={role.id}>
                                <label className="cb-container">
                                    <input type="checkbox" defaultChecked={role.checked} />
                                    <span className="text-small">{role.roleName}</span>
                                    <span className="checkmark" />
                                </label>
                                <span className="number-item">{role.count}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
};

export default RoleFilter;
