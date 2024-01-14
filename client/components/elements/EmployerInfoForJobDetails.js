
import React, { useState, useEffect } from "react";
import Link from "next/link";

const EmployerInfoForJobDetails = ({ employerId }) => {
    const [employer, setEmployer] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        // Tutaj możesz wykonać żądanie API lub pobranie danych pracodawcy na podstawie `employerId`
        // Przykład z użyciem fetch:

        fetch(`http://localhost:8080/api/filterEmployer/byId/${encodeURIComponent(employerId)}`)
            .then((response) => response.json())
            .then((data) => {
                setEmployer(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching employer data:", error);
                setLoading(false);
            });
    }, [employerId]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (!employer) {
        return <p>Employer not found.</p>;
    }

    return (
        <div className="sidebar-border">
            <div className="sidebar-heading">
                <div className="avatar-sidebar">
                    <figure>
                        <img alt="jobBox" src="/assets/imgs/page/job-single/avatar.png" />
                    </figure>
                    <div className="sidebar-info">
                        <span className="sidebar-company">{employer.employerName}</span>
                        <span className="card-location">{employer.city}, {employer.country}</span>
                        <Link legacyBehavior href="client/pages#">
                            <a className="link-underline mt-15">{employer.numberOfJobs} Open Jobs</a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="sidebar-list-job">
                {/*<div className="box-map">*/}
                {/*    /!* Mapa i inne informacje o pracodawcy *!/*/}
                {/*</div>*/}
                <ul>
                    <li><strong>Headquarter Location:</strong><br />{employer.city}, {employer.country}</li>
                    <li><strong>Website:</strong><br />{employer.urlToWebsite}</li>
                </ul>
            </div>
        </div>
    );
};

export default EmployerInfoForJobDetails;
