import React, { useEffect, useState } from "react";
import Link from "next/link";

const SimilarJobs = ({ categoryName }) => {
    const [similarJobs, setSimilarJobs] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:8080/api/filterOffers/similarJobs/${encodeURIComponent(categoryName)}`)
            .then((response) => response.json())
            .then((data) => {
                setSimilarJobs(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, [categoryName]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="sidebar-border">
            <h6 className="f-18">Similar jobs</h6>
            <div className="sidebar-list-job">
                <ul>
                    {similarJobs.map((jobOfferFrontEndEntity) => (
                        <li key={jobOfferFrontEndEntity.id}>
                            <div className="card-list-4 wow animate__animated animate__fadeIn hover-up">
                                <div className="image">
                                    <img src={`data:image/png;base64, ${jobOfferFrontEndEntity.miniatureImage}`} alt="jobBox"/>
                                </div>
                                <div className="info-text">
                                    <h5 className="font-md font-bold color-brand-1">
                                        <Link href={`/job-details/${jobOfferFrontEndEntity.jobOfferId}`}>
                                            {jobOfferFrontEndEntity.positionTitle}
                                        </Link>
                                    </h5>
                                    <div className="mt-0">
                                        <span className="card-briefcase">{jobOfferFrontEndEntity.employmentModel}</span>
                                        <span className="card-time">
                                            <span>{jobOfferFrontEndEntity.postedOn}</span>
                                        </span>
                                    </div>
                                    <div className="mt-5">
                                        <div className="row">
                                            <div className="col-6 text-end">
                                                <span className="card-briefcase">{jobOfferFrontEndEntity.experienceLevel}</span>
                                            </div>
                                            <div className="col-6">
                                                <span className="card-location">{jobOfferFrontEndEntity.offerCity}, {jobOfferFrontEndEntity.offerCountry}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};




export default SimilarJobs;
