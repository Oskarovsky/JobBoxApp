import React, { useState, useEffect } from "react";
import Link from "next/link";

const EmployersList = () => {
    const [employers, setEmployers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/filterEmployer/all")
            .then((response) => response.json())
            .then((data) => {
                setEmployers(data);
            })
            .catch((error) => console.error("Error fetching employers data:", error));
    }, []);

    return (
        <div className="row">
            {employers.map((employerFrontEndEntity) => (
                <div key={employerFrontEndEntity.id} className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                        <div className="image-box">
                            <img src="assets/imgs/brands/brand-1.png" alt="jobBox" />
                        </div>
                        <div className="info-text mt-10">
                            <h5 className="font-bold">
                                <Link href={`/company-details/${employerFrontEndEntity.id}`}>
                                    {employerFrontEndEntity.employerName}
                                </Link>
                            </h5>
                            <span className="card-location">{employerFrontEndEntity.city}, {employerFrontEndEntity.country}</span>
                            <div className="mt-30">
                                <div className="mt-30">
                                    <Link href={`/jobs-list?employerId=${employerFrontEndEntity.id}`}>
                                        <button className="btn btn-grey-big">
                                            <span>{employerFrontEndEntity.numberOfJobs} Jobs Open</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default EmployersList;
