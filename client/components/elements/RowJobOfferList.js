import React, {useEffect, useState} from "react";
import Link from "next/link";

const RowJobOfferList = () => {

    const [jobOffersMiniature, setJobOffersMiniature] = useState(null);
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:8080/api/filterOffers/rowJobOfferList')
            .then((res) => res.json())
            .then((jobOffersMiniature) => {
                setJobOffersMiniature(jobOffersMiniature)
                setLoading(false)
            })
    }, []);

    if (isLoading) return <p>Loading...</p>
    if (!jobOffersMiniature) return <p>No profile data</p>

    return (
        <>
            <div className="row display-list">
                {jobOffersMiniature.map((jobOfferMiniature) => (
                    <div className="col-xl-12 col-12">
                        <div className="card-grid-2 hover-up">
                            <span className="flash"/>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="card-grid-2-image-left">
                                        <div className="image-box">
                                            <img src="assets/imgs/brands/brand-1.png" alt="jobBox"/>
                                        </div>
                                        <div className="right-info">
                                            <Link legacyBehavior href="#">
                                                <a className="name-job">{jobOfferMiniature.employerName}</a>
                                            </Link>
                                            <span
                                                className="location-small">{jobOfferMiniature.offerCity}, {jobOfferMiniature.offerCountry}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 text-start text-md-end pr-60 col-md-6 col-sm-12">
                                    <div className="pl-15 mb-15 mt-30">
                                        {jobOfferMiniature.technologyStack.map((tech) => (
                                            <Link legacyBehavior href="/jobs-grid">
                                                <a className="btn btn-grey-small mr-5">{tech}</a>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="card-block-info">
                                <h4>
                                    <Link legacyBehavior href="/job-details">
                                        <a>{jobOfferMiniature.positionTitle}</a>
                                    </Link>
                                </h4>
                                <div className="mt-5">
                                    <span className="card-briefcase">{jobOfferMiniature.employmentModel}</span>
                                    <span className="card-time"><span>{jobOfferMiniature.postedOn}</span>
                                                            </span>
                                </div>
                                <div className="card-2-bottom mt-20">
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default RowJobOfferList;
