
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
                <Link href={`/company-details/${employer.id}`}>
                    <div className="avatar-sidebar">
                        <figure>
                            <img alt="jobBox" src={`data:image/png;base64, ${employer.miniatureImage}`} />
                        </figure>
                        <div className="sidebar-info">
                            <span className="sidebar-company">{employer.employerName}</span>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="sidebar-list-job">
                <div className="sidebar-list-job">
                    <ul>
                        <li>
                            <div className="sidebar-icon-item">
                                <i className="fi-rr-briefcase"/>
                            </div>
                            <div className="sidebar-text-info">
                                <span className="text-description">Industry</span>
                                <strong className="small-heading">{employer.industry}</strong>
                            </div>
                        </li>
                        <li>
                            <div className="sidebar-icon-item">
                                <i className="fi-rr-marker"/>
                            </div>
                            <div className="sidebar-text-info">
                                <span className="text-description">Headquarter</span>
                                <strong
                                    className="small-heading">{employer.city}, {employer.country}</strong>
                            </div>
                        </li>
                        <li>
                            <div className="sidebar-icon-item">
                                <i className="fi-rr-checkbox"/>
                            </div>
                            <div className="sidebar-text-info">
                                <span className="text-description">Jobs Open</span>
                                <strong
                                    className="small-heading">{employer.numberOfJobs}</strong>
                            </div>
                        </li>
                        <li>
                            <div className="sidebar-icon-item">
                                <i className="fi-rr-bookmark"/>
                            </div>
                            <div className="sidebar-text-info">
                                <span className="text-description">Website</span>
                                <strong
                                    className="small-heading">{employer.urlToWebsite}</strong>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default EmployerInfoForJobDetails;
