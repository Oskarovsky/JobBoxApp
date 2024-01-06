import React, { useState, useEffect } from "react";
import Link from "next/link";

const EmployersList = () => {
    const [employers, setEmployers] = useState([]);

    useEffect(() => {
        // Fetch employers data from your API
        // Adjust the API endpoint to match your backend implementation
        fetch("http://localhost:8080/api/filterEmployer/all")
            .then((response) => response.json())
            .then((data) => {
                setEmployers(data);
            })
            .catch((error) => console.error("Error fetching employers data:", error));
    }, []);

    return (
        <div className="row">
            {employers.map((employer, index) => (
                <div key={index} className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                        <div className="image-box">
                            <Link legacyBehavior href="/company-details">
                                <a>
                                    <img src="assets/imgs/brands/brand-1.png" alt="jobBox" />
                                </a>
                            </Link>
                        </div>
                        <div className="info-text mt-10">
                            <h5 className="font-bold">
                                <Link legacyBehavior href="/company-details">
                                    <a>{employer.employerName}</a>
                                </Link>
                            </h5>
                            <span className="card-location">{employer.city}, {employer.country}</span>
                            <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                    <a className="btn btn-grey-big">
                                        <span>{employer.numberOfJobs}</span>
                                        <span> Jobs Open</span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default EmployersList;
